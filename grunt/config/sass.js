module.exports = {
    dist: {
        options: {
            style: 'expanded'
        },
        files: {
            '<%= project.styles.dist %>/main.css': '<%= project.styles.src %>/main.scss'
        }
    }
};
