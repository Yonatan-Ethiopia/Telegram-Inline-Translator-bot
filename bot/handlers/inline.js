const translate = require('../services/translate')

module.exports = (bot) => {
  bot.on('inline_query', async (ctx) => {
    const q = ctx.inlineQuery.query.trim()
    console.log('Inline query:', q)

    if (!q.includes('|')) {
      return ctx.answerInlineQuery([{
        type: 'article',
        id: 'fallback',
        title: 'Missing | symbol',
        input_message_content: {
          message_text: 'Use format: en|fr hello'
        }
      }], { cache_time: 0 })
    }

    const [langs, ...rest] = q.split(' ')
    const [from, to] = langs.split('|')
    const text = rest.join(' ').trim()

    if (!from || !to || !text) {
      return ctx.answerInlineQuery([], { cache_time: 0 })
    }

    console.log(`Translating "${text}" from ${from} to ${to}`)

    let translated
    try {
      translated = await translate(text, from, to)
      console.log('Translated:', translated)
    } catch (e) {
      console.error('Translate error:', e)
      return ctx.answerInlineQuery([], { cache_time: 0 })
    }

    const result = {
      type: 'article',
      id: '1',
      title: `From ${from} to ${to}`,
      description: `${translated}`,
      input_message_content: {
        message_text: `🔁 ${from} → ${to}\n${translated}`
      }
    }

    await ctx.answerInlineQuery([result], { cache_time: 0 })
  })
}