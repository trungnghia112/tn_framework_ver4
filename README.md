##About project
###The specifics of the framework are:
* Bootstrap html to be used
* Responsive
* less
* grunt
* styledocco

###Git source
```
https://github.com/trungnghia112/tn_framework_ver4
```
or

```
git@github.com:trungnghia112/tn_framework_ver4.git
```

##Source code
>public_html/
??? core/
??? css/
??? designs/
??? docs/
??? fonts/
??? images/
??? js/
??? less/
??? web_tools/

###less structure
>less/
??? mixins/
??? ??? grid.less
??? ??? grid-framework.less
??? mixin.less
??? setting.less
??? style.less

###CSS document
```
docs/app.html
```

##Compiling CSS and JavaScript
Project uses Grunt for its build system.
###Installing Grunt
To install Grunt, you must first [<i class="icon-download"></i> download and install node.js](https://nodejs.org/download/) (which includes npm). 

Then, from the command line:
Install grunt-cli globally with `npm install -g grunt-cli`.
Navigate to the **/web_tools/**, then run npm install. npm will look at the package.json file and automatically install the necessary local dependencies listed there.
When completed, you'll be able to run the various Grunt commands provided from the command line.

###Available Grunt commands
`grunt build` (Just compile CSS and JavaScript)
Regenerates the /dist/ directory with compiled and minified CSS and JavaScript files.

----------
`grunt buildcss` (Just compile CSS)

----------
`grunt` (Watch)

----------
##StyleDocco
###Installing StyleDocco
StyleDocco requires [<i class="icon-download"></i> node.js](https://nodejs.org/download/) . Navigate to the **/web_tools/**, then run npm install

```
npm install -fg styledocco
```
###Usage. Navigate to the **/**, then run
```
styledocco -n "TN Framework" css
```
