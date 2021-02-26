import requests
from bs4 import BeautifulSoup
import smtplib
import time

url = "https://wizzair.com/de-de#/booking/select-flight/SOF/FRA/2020-03-04/null/1/0/0/0/null"

headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'}

page = requests.get(url, headers = headers)

def check_price():
    soup = BeautifulSoup(page.content, 'html.parser')
#<time datetime="2020-03-01T00:00:00+01:00" class="flight-select__flight-date-picker__day__number title title--2"> So. 01, März </time>
    title = soup.find_all(datetime="2020-03-01T00:00:00+01:00").get_text()
    # title = soup.find(id="prouductTitle").get_text()
    try:
        title = soup.find(itemprop="telephone").get_text()
    except AttributeError:
        print("Telephone Number: -")

    price  = soup.find(id="priceblock_ourprice").get_text()

    converted_price = float(price[0:7])

    if(converted_price <= 180.00):
        send_mail()

    print(converted_price)
    print(title.strip())

    if(converted_price >= 180.00):
        send_mail()

def send_mail():
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.ehlo()

    server.login(alex_sporis@icloud.com, Ecaterina16)
    subject = 'We can go to Bulgaria now!!!'
    body = 'Check this link https://wizzair.com/de-de#/booking/select-flight/SOF/FRA/2020-03-04/null/1/0/0/0/null'

    msg = f"Subjekt: {subject}\n\n"

    server.send_mail(
        'alex_sporis@icloud.com',
        msg
    )
    print('E-mailhas been send')
    server.quit()

while(True):
    check_price()
    time.sleep(60)