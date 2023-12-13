#file that get word data with bs4
def get_voca_data():
    import requests
    from bs4 import BeautifulSoup

    import re

    import json

    import random

    voca_list = []

    def make_text_clean(text : str):
        return re.sub(r"[^가-힣]", "", text)

    headers = {"User-Agent" : "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"}
    URL = "https://namu.wiki/w/%ED%95%9C%EB%AC%B8%20%EA%B5%90%EC%9C%A1%EC%9A%A9%20%EA%B8%B0%EC%B4%88%20%ED%95%9C%EC%9E%90"

    response = requests.get(URL, headers=headers)

    html = response.text
    soup = BeautifulSoup(html, 'html.parser')


    table = soup.find_all("table", "TiHaw-AK")[3]
    trs = table.find_all("tr")[1:]

    for tr in trs:
        strings = tr.find_all("td")[2].find("div").get_text()

        if strings:
            text_list = strings.split("·")

            for string in text_list:
                string_list = string.strip().split(" (")
                word = string_list[0]
                word_meaning = make_text_clean(string_list[1])
                meaning = word_meaning[0:-1] + " " + word_meaning[-1]

                voca_list.append({
                    "word" : word,
                    "meaning" : meaning
                })

    random.shuffle(voca_list)

    json_voca_list = json.dumps(voca_list, ensure_ascii=False)

    return json_voca_list



