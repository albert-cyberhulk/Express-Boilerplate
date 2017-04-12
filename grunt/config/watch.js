module.exports = {
    express: {
        files: [
            '<%= project.app %>/**/*.js'
        ],
        tasks: ['express:dev'],
        options: {
            spawn: false
        }
    },
    sass: {
        files: [
            '<%= project.styles.src %>/**/*.scss'
        ],
        tasks: ['sass']
    }
};