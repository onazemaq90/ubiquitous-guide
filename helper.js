export async function sendWelcomeMessage(chatId, user) {
  const videoUrl = "https://t.me/kajal_developer/57";
  const buttons = [
    [{ text: "Commands", callback_data: "/Commands" }],
    [{ text: "DEV", url: "https://t.me/Teleservices_Api" }],
  ];

  const caption = `<b>👋 Welcome Back ${user.first_name}</b>\n\n🌥️ Bot Status: Alive 🟢\n\n💞 Dev: @LakshayDied`;

  await fetch(`${BASE_URL}/sendVideo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      video: videoUrl,
      caption: caption,
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: buttons },
    }),
  });
}

export async function sendCommandsMenu(chatId) {
  const videoUrl = "https://t.me/kajal_developer/57";
  const buttons = [
    [
      { text: "Gateways", callback_data: "/black" },
      { text: "Tools", callback_data: "/tools" },
    ],
    [
      { text: "Channel", url: "https://t.me/Teleservices_Api" },
      { text: "DEV", url: "https://t.me/Teleservices_Bots" },
    ],
    [{ text: "◀️ Go Back", callback_data: "/black" }],
  ];

  const caption = `<b>[𖤐] XS developer :</b>\n\n<b>[ϟ] Current Gateways And Tools :</b>\n\n<b>[ᛟ] Charge - 0</b>\n<b>[ᛟ] Auth - 0</b>\n<b>[ᛟ] Tools - 2</b>`;

  await fetch(`${BASE_URL}/sendVideo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      video: videoUrl,
      caption: caption,
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: buttons },
    }),
  });
}

export async function deleteMessage(chatId, messageId) {
  await fetch(`${BASE_URL}/deleteMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      message_id: messageId,
    }),
  });
}

export async function sendAboutMessage(chatId, user) {
  const aboutMessage = `
<b><blockquote>⍟───[ MY ᴅᴇᴛᴀɪʟꜱ ]───⍟</blockquote>

‣ ᴍʏ ɴᴀᴍᴇ : <a href="https://t.me/${user.username}">${user.first_name}</a>
‣ ᴍʏ ʙᴇsᴛ ғʀɪᴇɴᴅ : <a href='tg://settings'>ᴛʜɪs ᴘᴇʀsᴏɴ</a> 
‣ ᴅᴇᴠᴇʟᴏᴘᴇʀ : <a href='https://t.me/kingvj01'>ᴛᴇᴄʜ ᴠᴊ</a> 
‣ ʟɪʙʀᴀʀʏ : <a href=''></a> 
‣ ʟᴀɴɢᴜᴀɢᴇ : <a href=''></a> 
‣ ᴅᴀᴛᴀ ʙᴀsᴇ : <a href=''></a> 
‣ ʙᴏᴛ sᴇʀᴠᴇʀ : <a href=''></a> 
‣ ʙᴜɪʟᴅ sᴛᴀᴛᴜs : ᴠ [sᴛᴀʙʟᴇ]</b>
  `;

  await fetch(`${BASE_URL}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: aboutMessage,
      parse_mode: 'HTML',
    }),
  });
}
