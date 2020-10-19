1. element组建使用
2. git 的使用
3. vue3
4. 其他

```
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[user]
	name = graylogo
	email = graylogo@gmail.com
[color]
	ui = true
[core]
	quotepath = false
	excludesfile = /Users/gray/.gitignore_global
	autocrlf = input
[difftool "sourcetree"]
	cmd = opendiff \"$LOCAL\" \"$REMOTE\"
	path = 
[mergetool "sourcetree"]
	cmd = /Applications/Sourcetree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\" \"$REMOTE\" -ancestor \"$BASE\" -merge \"$MERGED\"
	trustExitCode = true
[commit]
	template = /Users/gray/.stCommitMsg
[alias]
	lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%\n\nd%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative

```