set rtp+=$HOME/.vim/bundle/Vundle.vim

call vundle#begin()

Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'kien/ctrlp.vim'
Plugin 'vim-airline/vim-airline'


"syntax
Plugin 'leafgarland/typescript-vim'
call vundle#end()        

colorscheme darkblue
set ic
se nu

set incsearch

set ts=4
set sw=4
set sts=4

map <F1> :NERDTreeFind<cr>
map <F2> :cd %:p:h<cr>:!start cmd<cr>
map <F3> :cd %:p:h<cr>:!start explorer %:p:h<cr>

let g:ctrlp_cmd = "CtrlPMRUFiles"
