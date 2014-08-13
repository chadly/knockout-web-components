module.exports = function(grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8000,
					keepalive: true,
					open: "http://localhost:8000/"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-connect");

	grunt.registerTask("default", ["connect"]);
};
