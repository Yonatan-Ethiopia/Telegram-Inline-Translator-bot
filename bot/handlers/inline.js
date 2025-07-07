module.exports = (bot) => {
  bot.on('inline_query', async (ctx) => {
    const q = ctx.inlineQuery.query;
    if(!q) return;
    
    const results = [{
      type: 'article',
      id: '1',
      title: 'Tersisis',
      input_message_content: {
        message_text: `You typed ${q}`
      }
    }];
    
    await ctx.answerInlineQuery(results);
  });
};