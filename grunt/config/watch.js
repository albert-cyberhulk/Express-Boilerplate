module.exports = {
    express: {
        files: [
            '<%= project.app %>/**/*.js'
        ],
        tasks: ['express:dev'],
        options: {
            spawn: false
        }
    }
};