const robots = {
    researcher: require('../bot_researcher'),
    state: require('../state'),
}

async function start() {
    return await robots.researcher()
}

module.exports = {
    async store(request, response) {
        const { words } = request.body

        const content = {
            maximumSentences: 7
        }

        content.searchTerm = words
        content.prefix = 'What is '
        robots.state.save(content)

        start().then(() => {
            return response.json({ 'data': JSON.stringify(robots.state.load()) })
        })
    }
};