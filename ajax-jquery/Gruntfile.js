module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.initConfig({
        compress: {
            main: {
                options: {
                    archive: 'zurek.zip'
                },
                files: [{
                    src: ['package.json', 'Gruntfile.js', 'serwer.js', 'public/**', 'db/*']
                }]
            }
        }
    });
    grunt.registerTask('default', ['compress']);

};
