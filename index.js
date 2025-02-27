import { TelegramBot } from './TelegramBotAPI.js';
import { sendWelcomeMessage, sendCommandsMenu, sendAboutMessage, deleteMessage } from './helper.js';
import { BOT_TOKEN } from './constants.js';

const bot = new TelegramBot(BOT_TOKEN);

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === 'POST') {
    const update = await request.json();
    await handleUpdate(update);
    return new Response('OK', { status: 200 });
  }
  return new Response('Method not allowed', { status: 405 });
}

async function handleUpdate(update) {
  const chatId = update.message?.chat.id || update.callback_query?.message.chat.id;
  const messageId = update.message?.message_id || update.callback_query?.message.message_id;
  const text = update.message?.text || update.callback_query?.data;
  const user = update.message?.from || update.callback_query?.from;

  if (!chatId || !user) return;

  switch (text) {
    case '/start':
      await sendWelcomeMessage(chatId, user);
      break;
    case '/Commands':
      await sendCommandsMenu(chatId);
      break;
    case '/about':
      await sendAboutMessage(chatId, user);
      break;
    case '/delete':
      if (messageId) await deleteMessage(chatId, messageId);
      break;
    default:
      // Handle unknown commands or callback data if needed
      break;
  }
}
