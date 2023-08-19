import requests
url = 'http://localhost:6969/student/profile/it/registered/v0'
data = requests.get(url=url)

data = data.json()
print(data)
