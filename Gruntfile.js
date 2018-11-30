module.exports = function(grunt){

	grunt.initConfig({

		jshint : {
			files : [
				'js/main.js'
			]
		},

		uglify : {
			js : {
				files : {
					'../js/scripts.min.js': [
						'../js/scripts.all.js',
					]
				}
			}
		},

		concat : {
            scripts : {
                src : [
					'js/vendors/*',
					'js/lib/*',
					'js/babel/scripts.js'
                ],

                dest : '../js/scripts.all.js'
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

		copy : {
			dist : {
				expand  : true,
				flatten : false,
				cwd     : '../',
				src     : [
					'*.html',
					'application/**/*',
					'*.php',
					'system/**/*',
					'*.json',
					'**/**/.htaccess',
					'*.htaccess'
				],
				dest : '../dist/',
			},

			estilos: {
				expand  : true,
				flatten : false,
				cwd     : '../',
				src     : [
					'css/*',
					'application/views/templates/header.php',
				],
				dest : '../dist/'
			},

			scripts: {
				expand  : true,
				flatten : false,
				cwd     : '../',
				src     : [
					'js/*',
					'application/views/templates/footer.php',
				],
				dest : '../dist/',
			},

			assets : {
				expand  : true,
				flatten : false,
				cwd     : '../',
				src     : ['assets/**'],
				dest    : '../dist/'
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
					'../css/estilos.min.css': 'sass/main.scss'
				}
			}
		},

		autoprefixer : {
			dest : {
				src : '../css/estilos.min.css'
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
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('default', ['sass', 'autoprefixer', 'babel', 'concat']);
	grunt.registerTask('build', ['default', 'uglify']);
};