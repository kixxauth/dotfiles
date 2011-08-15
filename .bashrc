# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
[ -z "$PS1" ] && return

# don't put duplicate lines in the history. See bash(1) for more options
# ... or force ignoredups and ignorespace
HISTCONTROL=ignoredups:ignorespace

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "$debian_chroot" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color) color_prompt=yes;;
esac

# colored prompt from http://www.ccs.neu.edu/home/katz/unix-colors.html
PSC() { echo -ne "\[\033[${1:-0;38}m\]"; }
[ -n "$CYGWIN" ] && cygpwd="s:^/cygdrive/([a-z])(/|$):\1\:/:;"
function PWD() { echo "$*" |perl -pne \
  's:^'"$HOME"':~:;'"$cygpwd"'s:^(.{10}).{4}.*(.{20})$:$1...$2:;'
}
PR="0;32"		# default color used in prompt is green
if [ "$(id -u)" = 0 ]
  then sudo=41		# root is red background
  elif [ "$(id -un)" != "$(basename $HOME)" ]
    then sudo=31	# not root, not self: red text
  else sudo="$PR"	# standard user color
fi
alias PS1='export PS1="\u@\h \w\$ "'	# if in trouble, run the command 'PS1'
PROMPT_COMMAND='[ $? = 0 ] && PS1=${PS1[1]} || PS1=${PS1[2]}'
PSbase="$(PSC $sudo)\u$(PSC $PR)@\h $(PSC 33)\$(PWD \w)"
PS1[1]="$PSbase$(PSC $PR)\$ $(PSC)"
PS1[2]="$PSbase$(PSC  31)\$ $(PSC)"
PS1="${PS1[1]}"
unset sudo PR PSbase

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls -h --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

export CLICOLOR=1

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if [ -f /etc/bash_completion ] && ! shopt -oq posix; then
    . /etc/bash_completion
fi

# set PATH so it includes private bin in $HOME if it exists
if [ -d $HOME/local/bin ]; then
    PATH=$HOME/local/bin:$PATH
fi

