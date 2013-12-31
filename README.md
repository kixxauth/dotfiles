Dotfiles
========

Some of my . files I have lying around on my machines.
------------------------------------------------------

Feel free to poke around, and if you have any tips... share the love.

### Some of the Vim stuff is managed with git submodules

So, before you can use this repository, you need to initialize and update the submodules:

    git submodule init
    git submodule update

### To Update the Vim Scripts

	cd vim/third_party/vim-pathogen
	git checkout master
	git pull origin master
	cd ../../../
	git commit -a
	cd vim/third_party/vim-javascript
	git checkout master
	git pull origin master
	cd ../../../
	git commit -a
	cd vim/.vim/bundle/vim-coffee-script
	git checkout master
	git pull origin master
	cd ../../../../
	git commit -a
	cd vim/.vim/bundle/vim-less
	git checkout master
	git pull origin master
	cd ../../../../
	git commit -a

	bin/update-vim

### To Deploy the . Files

    bin/deploy

The only files deployed will be Vim files, .gitignore, and .bashrc; the rest of the files in this repo are for reference only.

*Kris*

