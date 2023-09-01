from github import Github   #pip install PyGithub

token = "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" #https://github.com/settings/tokens

g = Github(token)

#for repo in g.get_user().get_repos():
    #print(repo.full_name)

#repo = g.get_repo("joao-portelinha/Projeto-FAC")

#content = repo.get_contents("")

repo = g.get_repo("joao-portelinha/Projeto-FAC")
all_files = []
contents = repo.get_contents("")
while contents:
    file_content = contents.pop(0)
    if file_content.type == "dir":
        contents.extend(repo.get_contents(file_content.path))
    else:
        file = file_content
        all_files.append(str(file).replace('ContentFile(path="','').replace('")',''))

with open('docs/asdTESTTT.txt', 'r') as file:
    content = file.read()

# Upload to github
git_prefix = 'docs/'
git_file = git_prefix + 'asdTESTTT.txt'
if git_file in all_files:
    contents = repo.get_contents(git_file)
    repo.update_file(contents.path, "committing files", content, contents.sha, branch="main")
    print(git_file + ' UPDATED')
else:
    repo.create_file(git_file, "committing files", content, branch="main")
    print(git_file + ' CREATED')
