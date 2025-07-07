module.exports = {
  bot.on('inline_query', async (ctx) => {
    const q = ctx.inlineQuery.query;
    if(!q) return;
    else{
      const results = {
        type: 'article',
        id: '1',
        title: 'Tersisis',
        input_message_conte: {
          message_text: `You typed ${q}`
        }
      }
    }
  })
}