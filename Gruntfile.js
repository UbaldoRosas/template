module.exports = function(grunt){

	grunt.initConfig({

		concat : {
            base : {
                src : [
					'js/vendors/*',
					'js/main.js'
                ],

                dest : '../js/base.js'
            },
		},

		babel: {
			options: {
			  	sourceMap: true
			},
			dist: {
				files: {
					"js/babel/scripts.js": "js/main.js"
				}
			}
		},

		sprite :{
			all : {
				src       : 'sprites/*.png',
				dest      : '../assets/img/sprites.png',
				imgPath   : '../assets/img/sprites.png',
				destCss   : 'sass/helpers/_mixin-sprt.scss',
				padding   : 1,
				algorithm : 'binary-tree'
			}
		},

		sass : {
			dist : {
				options : {
					style : 'compressed',
				},

				files : {
					'../css/base.css': 'sass/main.scss'
				}
			}
		},

		autoprefixer : {
			dest : {
				src : '../css/*.css'
			}
		},

		watch : {
			scripts : {
				files   : ['Gruntfile.js', 'js/**/*.js', 'js/*.js'],
				tasks   : ['babel', 'concat'],
				options : {
					spawn : false,
				}
			},

			html : {
				files : ['../**/*.php', '../**/*.html', '../*.php', '../*.html']
			},

			estilos : {
				files   : ['sass/**/*'],
				tasks   : ['sass', 'autoprefixer'],
				options : {
					interrupt : true
				}
			},

			options : {
				livereload : true
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('default', ['sass', 'autoprefixer', 'babel', 'concat']);
	grunt.registerTask('build', ['default']);
};