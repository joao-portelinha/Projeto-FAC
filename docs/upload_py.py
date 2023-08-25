import requests
url = "http://localhost/Projeto-FAC/docs/welcome_get.php"
myFile = open("output.json","rb")
r = requests.get(url,data={'upload_file_btn':'Upload'},files={'upload_file':myFile})
#print (r.text.find("The uploaded file has been accepted.") )
# ≠ -1