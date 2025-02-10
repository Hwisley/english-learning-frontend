import requests
from bs4 import BeautifulSoup

url = "https://cnn.ybmnet.co.kr/cnn_class/3364"
# headers = {"User-Agent": "Mozilla/5.0"}

# response = requests.get(url, headers=headers)
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.content, "html.parser", from_encoding='utf-8')
    print(soup.prettify())  # HTML 확인
else:
    print("Failed to fetch page:", response.status_code)
