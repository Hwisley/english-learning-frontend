from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome import options

options.page_load_strategy = 'normal'

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install(), options=options))

url="https://cnn.ybmnet.co.kr/cnn_class/3364"
driver.implicitly_wait(1000)

driver.get(url)

driver.find_element(By.CLASS_NAME, "print").click()

pages = driver.find_elements(By.CLASS_NAME, "page")
innder_desktops = driver.find_elements(By.CLASS_NAME ,"inner.desktop")
# import time
# time.sleep(0.3)

title = pages[1].find_element(By.CLASS_NAME, "title").text
script_eng = pages[1].find_element(By.CLASS_NAME, "script").text
# time.sleep(0.3)
driver.find_element(By.CLASS_NAME, "cancel").click()
script_kor = driver.find_element(By.CLASS_NAME, "translation").find_element(By.CLASS_NAME, "script").text

print(title)
print(script_eng)
print(script_kor)


