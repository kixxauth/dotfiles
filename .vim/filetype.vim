augroup filetypedetect
au BufNewFile,BufRead *.md	setf markdown
au BufNewFile,BufRead *.mu	setf html
au BufNewFile,BufRead *.json	setf json
augroup END
