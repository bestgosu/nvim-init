set rtp+=$HOME/.vim/bundle/Vundle.vim

call vundle#begin()

Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'kien/ctrlp.vim'
Plugin 'vim-airline/vim-airline'

"ripgrep install nessesary by choco
Plugin 'jremmen/vim-ripgrep'
Plugin 'milkypostman/vim-togglelist'
"toggle quickfix location list ,q ,l

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

let mapleader=","
"toggle quickfix location list ,q ,l
"nmap <script> <silent> <leader>l :call ToggleLocationList()<CR>
"nmap <script> <silent> <leader>q :call ToggleQuickfixList()<CR>
"
vnoremap f y:cd %:p:h<CR>:Rg "<C-r>""<CR>
nmap <silent> <leader>, :cn<CR>
nmap <silent> <leader>m :cp<CR>


map <F1> :cd %:p:h<cr>:NERDTreeFind<cr>
map <F2> :cd %:p:h<cr>:!start cmd<cr>
map <F3> :cd %:p:h<cr>:!start explorer %:p:h<cr>

let g:ctrlp_cmd = "CtrlPMRUFiles"

let g:rg_highlight = "true"


vnoremap // y/\V<C-r>=escape(@",'/\')<CR><CR>
