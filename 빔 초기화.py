import os
import os.path

import SimpleHTTPServer
#import CGIHTTPRequestHandler

def make_web():
    port = 3333

    #handler = SimpleHTTPServer.SimpleHttpRequestHandler

        



if __name__ == "__main__":
    #print(os.getcwd());
    #u = urllib.urlopen("https://github.com/neovim/neovim/releases/download/v0.2.0/nvim-win32.zip")




    localappdata = os.getenv("localappdata")
    nvim_folder = os.path.abspath(localappdata + "/nvim");
    nvim_file = os.path.abspath(nvim_folder + "/init.vim");

    print(nvim_file+ " will be inited");

    nvim_file_o = open(nvim_file,"w")

    init_vim = """
    call vundle#begin()

    Plugin 'VundleVim/Vundle.vim'
    Plugin 'scrooloose/nerdtree'

    call vundle#end()
    
    colorscheme darkblue

    let g:python3_host_prog = "c://Users/sssm/Desktop/python_test/venv/Scripts/python.exe"
    """

    nvim_file_o.write(init_vim)

    print(nvim_file+ "is inited");
