


class Page:
    def __init__(self, name, urlFragment):
        self.name = name
        self.urlFragment = urlFragment

    def MakeCarcass(self):
        with open(f'{self.name}.ts', 'w') as f:
            f.write(f"""
import {{Page}} from '@playwright/test'
export class {self.name}Page {{
    const Page: Page
}}
            """)
## Добавить создание файла с данными по жсону и импорт данных с него в основной
## Добавить генерацию жсона по тхт файлу

p = Page("getAPILink", "https://playwright.dev/docs/api/class-playwright")
p.MakeCarcass()