/* eslint-disable require-jsdoc */
import { expect, Page, test, selectors } from '@playwright/test';
// import { createCustomDocument, deleteAllCustomDocuments, createPaymentOrders, executeSQL } from './database';
import dayjs from 'dayjs';

export class Autofix {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
       






    /**
     * @deprecated DEPRECATED
     *
     * @param {string} selector
     * @memberof Autofix
     */
    async defaultSelectorVisibility(selector: string) {
        // 
        // UNUSED
        // 
        const locator = await this.page.locator(selector);
        await locator.waitFor({ state: "visible" });
        await expect(locator).toBeVisible();
    }
       






    /**
     *
     * @deprecated DEPRECATED
     * @param {string} selector
     * @memberof Autofix
     */
    async modifiedSelectorVisibility(selector: string) {
        // 
        // UNUSED
        // 
        const splitArray = selector.split(' > ')
        try {
            var buildselector = splitArray[0] + " >> " + splitArray[splitArray.length - 1]
            try {
                await this.page.click(buildselector)
            }
            catch (e) {
                throw new Error
            }
        }
        catch (e) {
            throw new Error(`CheckVisibleAndClickable===>modifiedSelectorVisibility: Selector [${selector}] is NOT visible because of map error`)
        }
    }
       






    /**
     *
     * @deprecated DEPRECATED
     * @param {string} selector
     * @return {*} 
     * @memberof Autofix
     */
    async defaultTrialClick(selector: string) {
        // 
        // UNUSED
        // 
        const locator = await this.page.locator(selector);
        await this.page.waitForTimeout(300)
        try {
            await locator.waitFor({ state: "visible", timeout: 5000 });
        } catch (e) {
            throw new Error(`CheckVisibleAndClickable===>defaultTrialClick: Selector [${selector}] is NOT visible`)
        }
        await expect(locator).toBeVisible();
        await this.page.click(selector, { trial: true, timeout: 5000 })
        return true
    }
       






    /**
     *
     * @deprecated DEPRECATED
     * @param {*} error
     * @param {string} vrbl
     * @return {*} 
     * @memberof Autofix
     */
    async varMaker(error: any, vrbl: string) {
        // 
        // UNUSED
        // 
        var re = /<([\s\S]*?)>/g
        var re2 = /(?<=<)([\s\S]+?)(?= _)/g
        var re3 = /(?<=<)([\s\S]+?)(?= )/g

        var StringError = String(error).match(re)
        if (StringError) {
            switch (vrbl) {
                case 'StringError':
                    return StringError
                case 'context1':
                    return String(StringError[2]).match(re2)
                case 'context2':
                    return String(StringError[2]).match(re3)
                case 'StringError_Blocker':
                    return StringError[2]
            }
        }
    }

   



    /**
     *
     * @deprecated DEPRECATED
     * @param {string} selector
     * @param {*} error
     * @return {*} 
     * @memberof Autofix
     */
    async contextMaker(selector: string, error: any) {
        // 
        // UNUSED
        // 
        var context
        if (await this.varMaker(error, 'context1') && (await this.varMaker(error, 'StringError_Blocker')).includes('class=') == false) {
            context = await this.varMaker(error, 'context1')
        } else {
            context = await this.varMaker(error, 'context2')
        }
        const splitArray = selector.split(' > ')
        return { context: context, splitArray: splitArray }
    }   






    /**
     *
     * @deprecated DEPRECATED
     * @param {string} selector
     * @param {*} error
     * @return {*} 
     * @memberof Autofix
     */
    async zeroIndex_Text(selector: string, error: any) {
        // 
        // UNUSED
        // 
        var buildselector = (await this.contextMaker(selector, error)).context + " >> " + (await this.contextMaker(selector, error)).splitArray[0]
        try {
            await this.page.locator(buildselector).first().click({ force: true })
            return false
        }
        catch (e) {
            throw new Error
        }
    }
       






    /**
     *
     * @deprecated DEPRECATED
     * @param {string} selector
     * @return {*} 
     * @memberof Autofix
     */
    async zeroIndex_Modal(selector: string) {
        // 
        // UNUSED
        // 
        try {
            await this.page.locator(selector).first().click({ force: true })
            return false
        }
        catch (e) {
            throw new Error
        }
    }
       






    /**
     *
     * @deprecated DEPRECATED
     * @param {string} selector
     * @param {*} error
     * @return {*} 
     * @memberof Autofix
     */
    async twoFromEndModifier(selector: string, error: any) {
        // 
        // UNUSED
        // 
        var splitArray = (await this.contextMaker(selector, error)).splitArray
        var buildselector = (await this.contextMaker(selector, error)).context + " >> " + splitArray[splitArray.length - 2] + " > " + splitArray[splitArray.length - 1]
        try {
            //console.log(buildselector)
            await this.page.click(buildselector, { trial: true, timeout: 3000 })
            await this.page.click(buildselector)
            return false
        }
        catch (e) {
            throw new Error
        }
    }
       






    /**
     * @deprecated DEPRECATED
     *
     * @param {*} context
     * @memberof Autofix
     */
    async spanReplacer(context: any) {
        // 
        // UNUSED
        // 
        var buildselector = context + " >> span"
        try {
            await this.page.click(buildselector, { trial: true, timeout: 3000 })
            await this.page.click(buildselector)
        }
        catch (e) {
            throw new Error
        }
    }
       






    /**
     * @deprecated DEPRECATED
     *
     * @param {string} selector
     * @param {*} error
     * @return {*} 
     * @memberof Autofix
     */
    async oneFromEndModifier(selector: string, error: any) {
        // 
        // UNUSED
        // 
        var splitArray = (await this.contextMaker(selector, error)).splitArray
        var context = (await this.contextMaker(selector, error)).context
        var buildselector = context + " >> " + splitArray[splitArray.length - 1]
        try {
            await this.page.click(buildselector, { trial: true, timeout: 3000 })
            await this.page.click(buildselector)
            return false
        }
        catch (e) {
            await this.spanReplacer(context)
        }
    }
       






    /**
     *
     * @deprecated DEPRECATED
     * @param {string} selector
     * @param {*} error
     * @return {*} 
     * @memberof Autofix
     */
    async way_3(selector: string, error: any) {
        // 
        // UNUSED
        // 
        var splitArray = (await this.contextMaker(selector, error)).splitArray
        var context = (await this.contextMaker(selector, error)).context
        var StringError = String(await this.varMaker(error, 'StringError'))

        var buildselector = context + " >> " + splitArray[splitArray.length - 3] + " > " + splitArray[splitArray.length - 2] + " > " + splitArray[splitArray.length - 1]
        try {
            await this.page.click(buildselector, { trial: true, timeout: 3000 })
            await this.page.click(buildselector)
            return false
        }
        catch (e) {
            throw new Error(`CheckVisibleAndClickable===>way_3: Sorry bro, this selector: [${selector} (full name: ${StringError[0]}${StringError[1]})] is not clickable because of this seletor: [${StringError[2]}]`);
        }
    }
       






    /**
     * @deprecated DEPRECATED
     *
     * @param {string} selector
     * @param {*} error
     * @return {*} 
     * @memberof Autofix
     */
    async way_2(selector: string, error: any) {
        // 
        // UNUSED
        // 
        var splitArray = (await this.contextMaker(selector, error)).splitArray
        var context = (await this.contextMaker(selector, error)).context
        var StringError = String(await this.varMaker(error, 'StringError'))
        var buildselector = context + " >> " + splitArray[splitArray.length - 2] + " > " + splitArray[splitArray.length - 1]
        try {
            await this.page.click(buildselector, { trial: true, timeout: 3000 })
            await this.page.click(buildselector)
            return false
        }
        catch (e) {
            throw new Error(`CheckVisibleAndClickable===>way_2: Sorry bro, this selector: [${selector} (full name: ${StringError[0]}${StringError[1]})] is not clickable because of this seletor: [${StringError[2]}]`);
        }
    }
}

export class DateManager {

    /**
     * @brief Получить дату данного дня или дня в * amount * дней от этого
     *
     * @param {number} [amount=0]
     * @param {string} [format='DD.MM.YYYY']
     * @return {*} 
     * @memberof DateManager
     */
    async getDate(amount: number = 0, format = 'DD.MM.YYYY') {
        return String(dayjs().add(amount, 'd').format(format));
    }
}

export class DataBaseManager {
    user_id = Number(process.env.USER)
       






    /**
     *
     *
     * @param {string} baseName
     * @param {string} query
     * @return {*} 
     * @memberof DataBaseManager
     */
    async connectCurrentDataBase(baseName: string, query: string) {
        const Pool = await require('pg').Pool;
        const JSON_CONST = require(`../${baseName}/filter.json`)
        // console.log(JSON_CONST)
        const pool = await new Pool({
            user:       JSON_CONST["db_user"],
            host:       JSON_CONST["db_host"],
            database:   JSON_CONST["db_name"],
            password:   JSON_CONST["db_password"],
            port:       JSON_CONST["db_port"],
            max: 20
        });
        const result = await pool.query(query);
        await pool.end();
        return await result;
    }
       






    /**
     *
     *
     * @param {string} bankName
     * @param {string} query
     * @return {*} 
     * @memberof DataBaseManager
     */
    async executeSQL(bankName: string, query: string) {
        try {
            return this.connectCurrentDataBase(bankName, query)
        } catch (e) {
            // console.log("\x1b[31m%s\x1b[0m", `executeSQL: FAIL..........printing error: ${e}`)
            throw new Error(`[DBERR     ] executeSQL: Error occurred during executing query.\nQuery -> "${query}"\n${e}`)
        }
    }
}

export class Custom_F {
    readonly page: Page
    AF: Autofix
    constructor(page: Page) {
        this.page = page
        this.AF = new Autofix(this.page)
    }
    date = new DateManager
    dbmanager = new DataBaseManager
    timestart: any;
   






    /**
     *
     * @brief Проверка присутствия текста
     * @param {*} text
     * @return {*} {Promise<boolean>}
     * @memberof Custom_F
     */
    async boolText(text:any){
        try {
            var selector_to_find = `text=${text}`
            await this.page.waitForSelector(selector_to_find, { timeout: 2500 });
            return true
        } catch {
            return false
        }
        // var bo = await this.page.locator(`:has-text('${text}')`).isVisible()
        // console.log(this.page.locator(`:has-text('${text}')`))
        // console.log('bo', bo)
        // return bo
    }
       






    /**
     *
     * @brief Проверка присутствия селектора
     * @param {string} sel
     * @return {*} {Promise<boolean>}
     * @memberof Custom_F
     */
    
    async boolSel(sel:string):Promise<boolean>{
        try {
            await this.page.waitForSelector(sel, { timeout: 1000 });
            return true
        } catch {
            return false
        }
    }
       






    /**
     *
     * @brief Закрытие всех модальных окон в цикле
     * @memberof Custom_F
     */
    async escapeModal(){
        var presentModal = await this.boolSel('.modal')
        while(presentModal){
                
                await this.page.keyboard.press('Escape')
                presentModal = await this.boolSel('.modal')
            
            
        }
        
    }
       






    /**
     *
     * @deprecated DEPRECATED
     * @param {*} sel
     * @memberof Custom_F
     */
    async PrimitiveClick(sel:any){
        await this.page.click(sel, {force:true})
    }
       






    /**
     *
     *
     * @return {*} 
     * @memberof Custom_F
     */
    async timer() {
        let timeStart = new Date().getTime();
        return {
            get seconds() {
                const seconds = Math.ceil((new Date().getTime() - timeStart) / 1000) + 's';
                return seconds;
            },
            get ms() {
                const ms = (new Date().getTime() - timeStart) + 'ms';
                return ms;
            }
        }
    }
       






/**
 *
 *
 * @param {number} [amount=0]
 * @param {string} [format='DD.MM.YYYY']
 * @return {*}  {Promise<string>}
 * @memberof Custom_F
 */
async GetDate(amount: number = 0, format: string = 'DD.MM.YYYY'): Promise<string> {
        return this.date.getDate(amount, format)
    }
   






    /**
     * @brief Получить текст из селектора в переменную
     *
     * @param {string} selector
     * @return {*} 
     * @memberof Custom_F
     */
    async ReadFromSelector(selector: string) {
        try {
            const locator = await this.page.locator(selector);
            await locator.waitFor({ state: "visible" });
            await expect(locator).toBeVisible();
            return await this.page.innerText(selector);
        } catch (e) {
            // console.error('\x1b[31m%s\x1b[0m', `FAIL..........Selector not found: ${selector}`);
            throw new Error(`ReadFromSelector: Couldn't read text from selector "${selector}".`);
        }
    }
   






    /**
     *
     *
     * @param {string} account
     * @return {*} 
     * @memberof Custom_F
     */
    async spaceAccountString(account:string){
        return `${account.slice(0,5)} ${account.slice(5,8)} ${account.slice(8,9)} ${account.slice(9,13)} ${account.slice(13)}`
    }

    /**
     * @brief передвижение блоков
     *
     * @param {*} from
     * @param {*} to
     * @memberof Custom_F
     */
    async MoveBlock(from:any,to:any){
        // try {
            await from.push('h4')
            const cosfrom =await this.ConstructionSelector(from)
            const locatorfr = await this.page.locator(cosfrom);
            await expect(locatorfr).toBeVisible()

            await to.push('h4')
            const costo =await this.ConstructionSelector(to)
            const locatorto = await this.page.locator(costo);
            await expect(locatorto).toBeVisible()

            await this.page.hover(cosfrom)
            await this.page.mouse.down()
            await this.page.hover(costo)
            await this.page.mouse.up()

        // } catch (e) {
        //     throw new Error(`MoveBlock: Selector not found: ${from} or ${to}`);
        // }
    }
   






    /**
     * @brief Тестовая функция регулирования ползунка (требует проверки)
     * @deprecated DEPRECATED
     * @param {*} selector
     * @memberof Custom_F
     */
    async useSlider(selector: any) {
        // 
        // UNUSED
        // 
        try {
            const locator = await this.page.locator(selector);
            await locator.waitFor({ state: "visible" });
            await expect(locator).toBeVisible();
            await this.page.mouse.down(selector); // нажмётся ли так?
            await this.page.mouse.move(0, 100);
            await this.page.mouse.up();
            // ...
            await expect(locator).toHaveValue;
            // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
        } catch (e) {
            // console.error('\x1b[31m%s\x1b[0m', `useSlider: FAIL..........Selector not found: ${selector}`);
            throw new Error(`useSlider: Selector not found: ${selector}`);
        }
    }
   






    /**
     * @brief Проверка класса селектора в ангуляре
     * @deprecated DEPRECATED
     * @param {*} selector
     * @param {*} value
     * @memberof Custom_F
     */
    async checkCustom(selector: any, value: any) {
        // 
        // UNUSED
        // 
        try {
            const box = this.page.locator(selector)
            await expect(box).toHaveClass(value)
            // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
        } catch (e) {
            console.error('\x1b[31m%s\x1b[0m', `checkCustom: FAIL..........Selector not found: ${selector}`);
            throw new Error(`checkCustom: Selector not found: ${selector}`);
        }
    }
   






    /**
     *
     * @brief Проверить выбранный элемент (не текст) на отображение
     * @param {*} selector
     * @memberof Custom_F
     */
    async checkSelectorVisibility(selector: any) {
        try {
            const locator = await this.page.locator(selector);
            await this.page.waitForSelector(selector, { state: "visible" });
            // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
        } catch (e) {
            // console.error('\x1b[31m%s\x1b[0m', `checkSelectorVisibility: FAIL..........Selector not found: ${selector}`);
            throw new Error(`[TESTERR   ] [SELECTOR] checkSelectorVisibility: Selector "${selector}" is not visible.`);
        }
    }
   






    /**
     *
     * @brief Исполнение SQL запроса
     * @param {string} bankName
     * @param {string} query
     * @return {*} 
     * @memberof Custom_F
     */
    async ExecuteSQL(bankName: string, query: string) {
        try {
            return await this.dbmanager.executeSQL(bankName, query);
        } catch (e) {
            throw new Error(`[DBERR     ] executeSQL: Error occurred during executing query.\nQuery -> "${query}"\n${e}`)
        }
    }
   






    /**
     *
     * @brief Получить дату данного дня или дня в * amount * дней от этого
     * @param {number} [amount=0]
     * @param {string} [format='DD.MM.YYYY']
     * @return {*} 
     * @memberof Custom_F
     */
    async getDate(amount: number = 0, format = 'DD.MM.YYYY') {
        return dayjs().add(amount, 'd').format(format);
    }
   






    /**
     * @deprecated DEPRECATED
     * @brief Получить рандомное число
     * @param {number} min
     * @param {number} max
     * @return {*} 
     * @memberof Custom_F
     */
    async getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
   






    /**
     *
     * @brief Проверить, доступен ли для обозрения выбранный элемент (не текст)
     * @param {*} selector
     * @memberof Custom_F
     */
    async checkSelector(selector: any) {
        await test.step(`Проверка видимости селектора "${selector}"`, async () => {
            try {
                const locator = await this.page.locator(selector);
                await locator.waitFor({ state: "visible" });
                await expect(locator).toBeVisible();
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkSelector: FAIL..........Selector not found: ${selector}`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkSelector: Selector "${selector}" not found.`);
            }
        })
    }
   






    /**
     *
     * 
     * @param {string} text
     * @return {*} 
     * @memberof Custom_F
     */
    async textCheckBody(text: string) {
        try {
            var selector_to_find = `text=${text}`
            await this.page.waitForSelector(selector_to_find);
            const array_of_sel: any[] = await this.page.$$(selector_to_find);
            const work_array: any[] = [];

            if (array_of_sel.length > 0) {
                //console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........I found the text:  ${text}`);
            } else {
                //console.log('\x1b[31m%s\x1b[0m', `FAIL..........I did not find the text: ${text}`);
            }
            await expect(array_of_sel.length).toBeGreaterThan(0);
            for await (const element of array_of_sel) {
                await this.page.waitForTimeout(100)
                await element.textContent().then((value: any) => {
                    if (typeof value == 'string') {
                        value = value.trim().replace(/\s/g, '')
                        if (value === text.replace(/\s/g, '')) {
                            work_array.push(element);
                            //console.log('\x1b[32m%s\x1b[0m', `      SUCCESS..........I pushed the element with text "${text}" into element array`);
                        }
                    }
                });
            }
            return work_array
        } catch (e) {
            throw new Error(`[TESTERR   ] [TEXT    ] textCheckBody: Text "${text}" not found.`)
        }
    }
   






    /**
     *
     * @brief Проверка наличия текста
     * @param {*} text
     * @param {number} [timeout=20_000]
     * @memberof Custom_F
     */
    async checkText(text: any, timeout: number = 20_000) {
        await test.step(`Проверка наличия текста "${text}" на странице`, async () => {
            try {
                await this.Timer('CheckText')
                var work_array = await this.textCheckBody(text)
                for await (const el of work_array) {
                    await expect(await el.asElement().isVisible()).toBe(true);
                }
                await this.Timer('CheckText', true)
            } catch (e) {
                throw new Error(`[TESTERR   ] [TEXT    ] checkText: Text "${text}" not found.`);
            }
        })
    }
   





    /**
     * @brief Проверка 2-ух элементов на отображение (Возращает первый который найдёт)
     * @deprecated DEPRECATED
     * @param {*} obj1
     * @param {*} obj2
     * @return {*} 
     * @memberof Custom_F
     */
    async checkSelectorOrTextAndRerurnFirst(obj1: any, obj2: any,) {
        // 
        // UNUSED
        // 
        var text = false
        try {
            await this.page.locator(obj1).isVisible()
        } catch (error) {
            await this.page.locator(obj1)
            text = true
        }
        if (text == true) {
            Promise.any([
                this.page.locator(`text=${obj1}`),
                this.page.locator(`text=${obj2}`)
            ]).then(async (race) => {
                await this.checkText(race)
                return race
            })

        } else {
            var promobj1 = new Promise(async (resolve, reject) => {
                if (await this.page.locator(obj1).isVisible())
                    resolve(obj1)
                else {
                    console.log(`OBJ1`)
                    reject(obj1)
                }
            })
            var promobj2 = new Promise(async (resolve, reject) => {
                if (await this.page.locator(obj2).isVisible())
                    resolve(obj2)
                else {
                    console.log(`OBJ2`)
                    reject(obj2)
                }
            })

            const race = await Promise.any([
                promobj1,
                promobj2
            ])
            return race
        }
    }
   






    /**
     *
     *
     * @param {string} item
     * @param {boolean} [end=false]
     * @memberof Custom_F
     */
    async Timer(item: string, end: boolean = false) {
        if (!end) {
            this.timestart = new Date();
        }
        if (end) {
            let timeend = new Date();
            let diff = timeend.getTime() - this.timestart.getTime();
            // console.log(`${item} прошёл за: ${diff}ms`);
        }

    }
   






    /**
     *
     * @brief EXPERIMENTAL NAVIGATION 
     * @param {string} url
     * @param {*} checkselector
     * @param {{ num?: number, await?: boolean, awaittime?: number }} [options]
     * @memberof Custom_F
     */
    async Navigation(url: string, checkselector: any, options?: { num?: number, await?: boolean, awaittime?: number }) {
        await test.step(`Проверка навигации на страницу ${url}`, async () => {
            try {
                await this.NavigationForGlobalSetup(url, checkselector, options)
            } catch (e) {
                throw new Error(`[BLOCKERR  ] Navigation: Failed to navigate to page. [URL: ${url}, Selector: ${checkselector}]`)
            }
        })
    }
   






    /**
     *
     * @brief EXPERIMENTAL NAVIGATION GS
     * @param {string} url
     * @param {*} checkselector
     * @param {{ num?: number, await?: boolean, awaittime?: number }} [options]
     * @memberof Custom_F
     */
    async NavigationForGlobalSetup(url: string, checkselector: any, options?: { num?: number, await?: boolean, awaittime?: number }) {
        try {
            var num = options?.num ===undefined? 0:options?.num
            var awaits = options?.await ===undefined? false:options?.await
            var awaittime = options?.awaittime ===undefined? 3:options?.awaittime
            await this.page.waitForTimeout(100)
            this.page.goto(url)
            if(checkselector!=undefined||checkselector!=null){
                if(awaits)
                await this.page.waitForTimeout(awaittime*1000)
                await this.page.waitForSelector(await this.ConstructionSelector(checkselector, num))
            }
        } catch (e) {
            throw new Error(`[BLOCKERR  ] Navigation: Failed to navigate to page. [URL: ${url}, Selector: ${checkselector}]`)
        }
    }
   






    /**
     *
     *
     * @param {*} selector
     * @param {number} [num]
     * @param {boolean} [visibl]
     * @return {*} 
     * @memberof Custom_F
     */
    async ConstructionSelector(selector:any, num?: number,visibl?: boolean,options?: { modern:boolean}){
        var mod = options?.modern===undefined? true:options?.modern
        var number = num==undefined?0:num
        var sel = await [...selector].join(' >> ')
        if(mod){
            if(sel!='')
            sel = sel+`${visibl?':visible':''} >> nth=${number}`
        }
        return sel
    }
   






    /**
     * @brief Основная функция (деструктурированная). Проверка селектора/текста/полного текста/модального окна и выполнение: 
     * 1. Нажатия
     * 2. Проверки возможности нажатия
     * 3. Принудительного нажатия
     *
     * @param {{selector: any; descriptions: string, click?:boolean, text?: string, full?: boolean, num?: number, trial?: boolean, force?: boolean, modal?:boolean, timeout?: number,visible?:boolean,GB?:boolean}} {selector, descriptions, click=false ,text='', full=false, num=0, trial=false,force=false,modal=false,timeout=5000,visible=false GB=false}
     * @memberof Custom_F
     */
     async checkAndClickDestruct({selector, descriptions, click=false ,text='', full=false, num=0, trial=false,force=false,modal=false,timeoutclick=5000,timeoutvis=5000,timeoutclicktrial=5000,timeoutclickforce=5000,visible=false, GB=false}:{selector: any; descriptions: string, click?:boolean, text?: string, full?: boolean, num?: number, trial?: boolean, force?: boolean, modal?:boolean, timeoutclick?: number,timeoutvis?: number, timeoutclicktrial?: number, timeoutclickforce?: number,visible?:boolean,GB?:boolean}, ) {
        await this.Timer("checkAndClick")
        if(GB==false) {
            if (click) {
                var descriptionstext = "Проверка визуального присутствия селектора и нажатие на него"
            } else {
                var descriptionstext = "Проверка визуального присутствия селектора"
            }
            await test.step(`${descriptionstext} ${descriptions}`, async () => {
                var sel = selector.length > 1 ? await this.ConstructionSelector(selector,0,false,{modern:false}):selector
                await this.checkVisibleAndClickable(sel, { click: click, text: text, full: full, num: num, trial: trial, force: force, modal: modal, timeoutclick: timeoutclick,timeoutvis: timeoutvis,timeoutclicktrial:timeoutclicktrial,timeoutclickforce:timeoutclickforce, visible:visible })
            })
        } else if(GB==true){
            await this.checkVisibleAndClickable(selector, { click: click, text: text, full: full, num: num, trial: trial, force: force, modal: modal, timeoutclick: timeoutclick,timeoutvis: timeoutvis,timeoutclicktrial:timeoutclicktrial,timeoutclickforce:timeoutclickforce, visible:visible })
        }
        await this.Timer("checkAndClick",true)
    }
   






    /**
     *
     * @brief Основная функция (структурированная). Проверка селектора/текста/полного текста/модального окна и выполнение: 
     * 1. Нажатия
     * 2. Проверки возможности нажатия
     * 3. Принудительного нажатия
     * @param {*} selector
     * @param {string} descriptions
     * @param {{ click?: boolean, text?: string, full?: boolean, num?: number, trial?: boolean, force?: boolean, modal?:boolean, timeoutclick?: number, timeoutvis?: number, timeoutclicktrial?: number, timeoutclickforce?: number,visible?:boolean}} [options]
     * @param {boolean} [GB]
     * @memberof Custom_F
     */
     async checkAndClick(selector: any, descriptions: string, options?: { click?: boolean, text?: string, full?: boolean, num?: number, trial?: boolean, force?: boolean, modal?:boolean, timeoutclick?: number, timeoutvis?: number, timeoutclicktrial?: number, timeoutclickforce?: number,visible?:boolean},GB?:boolean) {
        await this.Timer("checkAndClick")
        var click = options?.click ===undefined? false:options?.click
        var text = options?.text ===undefined? '':options?.text
        var full = options?.full ===undefined? false:options?.full
        var num = options?.num ===undefined? 0:options?.num
        var trial = options?.trial ===undefined? true:options?.trial
        var force = options?.force ===undefined? true:options?.force
        var modal = options?.modal ===undefined? false:options?.modal
        var to = options?.timeoutvis ===undefined? 5000 : options?.timeoutvis
        var tot = options?.timeoutclicktrial ===undefined? 5000 : options?.timeoutclicktrial
        var tof = options?.timeoutclickforce ===undefined? 5000 : options?.timeoutclickforce
        var toc = options?.timeoutclick ===undefined? 5000 : options?.timeoutclick
        var GBp = GB===undefined? false:GB
        var visibl = options?.visible===undefined? false:options?.visible
        if(!GBp) {
            if (click) {
                var descriptionstext = "Проверка визуального присутствия селектора и нажатие на него"
            } else {
                var descriptionstext = "Проверка визуального присутствия селектора"
            }
            await test.step(`${descriptionstext} ${descriptions}`, async () => {
                await this.checkVisibleAndClickable(selector, { click: click, text: text, full: full, num: num, trial: trial, force: force, modal: modal, timeoutclick: toc,timeoutvis: to,timeoutclicktrial:tot,timeoutclickforce:tof,visible:visibl })
            })
        } else if(GBp){
            await this.checkVisibleAndClickable(selector, { click: click, text: text, full: full, num: num, trial: trial, force: force, modal: modal, timeoutclick: toc,timeoutvis: to,timeoutclicktrial:tot,timeoutclickforce:tof,visible:visibl })
        }
        await this.Timer("checkAndClick",true)
    }
   






     /**
      *
      *
      * @param {*} selector
      * @param {{ click: boolean, text: string, full: boolean, num: number, trial: boolean, force: boolean, modal:boolean,timeoutclick: number, timeoutvis: number,timeoutclicktrial:number,timeoutclickforce:number,visible:boolean }} [options]
      * @memberof Custom_F
      */
     async checkVisibleAndClickable(selector: any, options?: { click: boolean, text: string, full: boolean, num: number, trial: boolean, force: boolean, modal:boolean,timeoutclick: number, timeoutvis: number,timeoutclicktrial:number,timeoutclickforce:number,visible:boolean }) {
        await this.Timer("checkVisibleAndClickable",true)
        var sel
        if(selector != '' && options?.text != ''){
            if(options?.visible == true ){
                if(options?.full)
                    sel = selector+`:text-is('${options?.text}'):visible >> nth=${options?.num}` 
                else
                    sel = selector+`:text('${options?.text}'):visible >> nth=${options?.num}`
            }
            else{
                if(options?.full)
                    sel = selector+`:text-is('${options?.text}') >> nth=${options?.num}` 
                else
                    sel = selector+`:text('${options?.text}') >> nth=${options?.num}`
            }
        }
        else if(selector == '' && options?.text != ''){
            if(options?.modal)
                if(options?.full)
                    sel = `.modal >> :text-is('${options?.text}'):visible >> nth=${options?.num}` 
                else
                    sel = `.modal >> :text('${options?.text}'):visible >> nth=${options?.num}`
            else
                if(options?.full)
                    sel = `:text-is('${options?.text}'):visible >> nth=${options?.num}` 
                else
                    sel = `:text('${options?.text}'):visible >> nth=${options?.num}`
        }
        else if(selector !='' && options?.text == ''){
            if(options?.visible == true )
                sel = selector+`:visible >> nth=${options?.num}` 
            else
                sel = selector+` >> nth=${options?.num}`
        }
        else
            throw new Error(`[FUNCERR   ] checkVisibleAndClickable: null param`)
        const locator = await this.page.locator(sel)
        await this.page.waitForTimeout(300)
        try {
            await locator.waitFor({ state: "visible", timeout: options?.timeoutvis });
        } catch (e) {
            const error_subtype = options?.text!=''? '[TEXT    ]': '[SELECTOR]'
            throw new Error(`[TESTERR   ] ${error_subtype} checkVisibleAndClickable: Selector "${sel}" is NOT visible`)
        }
        await expect(locator).toBeVisible();
        if (options?.click) {
            if (options?.trial)
                try {
                    await locator.click({trial: true, timeout: options?.timeoutclicktrial })
                    await locator.click({force:options?.force, timeout: options?.timeoutclickforce })
                }
                catch {
                    throw new Error(`[TESTERR   ] [CLICK   ] checkVisibleAndClickable: Selector "${sel}" is not clickable`);
                }
            else
            await locator.click({force:options?.force, timeout: options?.timeoutclick })
        }
        await this.Timer("checkVisibleAndClickable",true)
    }
   






    /**
     *
     *
     * @param {string} text
     * @param {number} [i=0]
     * @memberof Custom_F
     */
    async checkTextAndClick(text: string, i: number = 0) {
        await test.step(`Проверка видимости и нажатия по тексту "${text}"`, async () => {
            var work_array = await this.textCheckBody(text)
            try{
                let n = 0;
                for await (const el of work_array) {
                    await expect(await el.asElement().isVisible()).toBe(true);
                    if (i == n) {
                        await work_array[i].asElement().click({ force: true });
                        break;
                    }
                    n++;
                }
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkTextAndClick: FAIL..........Text not found: ${sel}`);
                throw new Error(`[TESTERR   ] [CLICK   ] checkTextAndClick: Text "${text}" not found`);
            }
        })
    }
   





          
    /**
     *
     * @brief Проверить, что элемента (не текст) не видно
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkSelectorAbsent(selector: any, num?:number) {
        await test.step(`Проверка, что селектора не видно '${selector}'`, async () => {
            var selector1 = [...selector]
            var sel = await this.ConstructionSelector(selector1,num)
            try {
                await this.page.waitForTimeout(3000);
                const locator = await this.page.locator(sel);
                const assert_locator = locator.first();
                await expect(assert_locator).toBeHidden();
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector NOT found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkSelectorAbsent: FAIL..........Selector found: ${sel}`);
                throw new Error(`[TESTERR   ] [SELECTED] checkSelectorAbsent: Selector is not absent: ${sel}`);
            }
        })
    }
   






    /**
     *
     * @brief Проверить, что текст (точное совпадение) не видно
     * @param {string} text
     * @memberof Custom_F
     */
    async checkTextNotVisible(text: string) {
        await test.step(`Проверка, что текста не видно '${text}'`, async () => {
            try {
                await this.page.waitForTimeout(3000);
                const locator = await this.page.locator(`'${text}'`);
                const assert_locator = locator.first();
                await expect(assert_locator).toBeHidden();
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Text NOT found:  ${text}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkSelectorAbsent: FAIL..........Text FOUND: ${text}`);
                throw new Error(`[TESTERR   ] [TEXT    ] checkTextNotVisible: Text is visible: ${text}`);
            }
        })
    }
   






    /**
     *
     * @brief Заполнить выбранное поле текстом 
     * @param {*} selector
     * @param {string} filler
     * @param {number} [num]
     * @memberof Custom_F
     */
    async fillTheField(selector: any, filler: string, num?:number) {
        try {
            var selector1 = [...selector]
            var sel = await this.ConstructionSelector(selector1,num)
            const locator = await this.page.locator(sel)
            await locator.waitFor({ state: "visible" });
            await expect(locator).toBeVisible();
            await this.clearTheField(sel)
            await this.page.type(sel, filler);
            // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
        } catch (e) {
            // console.error('\x1b[31m%s\x1b[0m', `fillTheField: FAIL..........Selector not found: ${sel}`);
            throw new Error(`[TESTERR   ] [SELECTOR] fillTheField: Selector not found: ${selector}`);
        }
    }
   






    /**
     *
     * @brief Очистить выбранное поле
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async clearTheField(selector: any, num?:number) {
        try {
            if(typeof(selector)=="string")
            sel = selector
            else
            var sel = await this.ConstructionSelector(selector,num)
            const locator = await this.page.locator(sel)
            const assert_locator = await locator.first();
            await assert_locator.click({ clickCount: 3 });
            await this.page.keyboard.press('Backspace');
            // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
        } catch (e) {
            // console.error('\x1b[31m%s\x1b[0m', `clearTheField: FAIL..........Selector not found: ${selector}`);
            throw new Error(`[TESTERR   ] [SELECTOR] clearTheField: Selector not found: ${selector}`);
        }
    }
   






    /**
     *
     * @brief Проверить ссылку на совпадение ожиданиям
     * @param {(RegExp | string)} url
     * @memberof Custom_F
     */
    async checkURL(url: RegExp | string) {
        await test.step(`Проверка ссылки на совпадение`, async () => {
            try {
                await expect(this.page).toHaveURL(url);
                // console.error('\x1b[31m%s\x1b[0m', `SUCCESS..........URL found: ${url}`);
            } catch {
                // console.error('\x1b[31m%s\x1b[0m', `checkURL: FAIL..........URL NOT found: ${url}`);
                throw new Error(`[FUNCERR   ] checkURL: URL NOT found: ${url}`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка radiobox в ангуляре на взаимодействие и пустоту
     * @param {*} selector
     * @param {boolean} active
     * @param {boolean} checked
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkRadioState(selector: any, active: boolean, checked: boolean, num?:number) {
        await test.step(`Проверка radiobox на взаимодействие и пустоту`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                if (active == true) {
                    await expect(box).toHaveClass(/^(?!.*disabled).*/)
                }
                else if (active == false) {
                    await expect(box).toHaveClass(/.*disabled.*/)
                }
                if (checked == true) {
                    await expect(box).toHaveClass(/.*checked.*/)
                }
                else if (checked == false) {
                    await expect(box).toHaveClass(/^.*(?!checked).*/)
                }
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Radio found:  ${selector}`)
            } catch {
                // console.error('\x1b[31m%s\x1b[0m', `checkRadioState: FAIL..........Radio not found or has unexpected classes: ${sel}`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkRadioState: Radio not found or has unexpected classes: ${selector}`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка radiobutton в ангуляре
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkRadio(selector: any,num?:number) {
        await test.step(`Проверка radiobutton`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/.*checked.*/)
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkRadio: FAIL..........Radio button "${sel}" not found.`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkRadio: Radio button "${selector}" not found.`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка radiobutton в ангуляре и нажатие на него
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkRadioAndClick(selector: any, num?:number) {
        await test.step(`Проверка radiobutton и нажатие на него`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/.*checked.*/)
                await this.page.click(sel);
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkRadioAndClick: FAIL..........Radio button "${sel}" not found.`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkRadioAndClick: Radio button "${selector}" not found.`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка пустого radiobutton в ангуляре
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkRadioEmpty(selector: any, num?:number) {
        await test.step(`Проверка пустого radiobutton`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/^.*(?!checked).*/)
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkRadioEmpty: FAIL..........Radio button "${sel}" not found.`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkRadioEmpty: Radio button "${selector}" not found.`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка пустого radiobutton в ангуляре и нажатие на него
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkRadioEmptyAndClick(selector: any, num?:number) {
        await test.step(`Проверка пустого radiobutton и нажатие на него`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/^.*(?!checked).*/)
                await this.page.click(sel);
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkRadioEmptyAndClick: FAIL..........Radio button "${sel}" not found.`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkRadioEmptyAndClick: Radio button "${selector}" not found.`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка radiobutton на взаимодействие в ангуляре
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkRadioDisabled(selector: any, num?:number) {
        await test.step(`Проверка radiobutton на взаимодействие`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/checked(.*)disabled/)
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkRadioDisabled: FAIL..........Radio button "${sel}" not disabled.`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkRadioDisabled: Radio button "${selector}" not disabled.`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка пустого radiobutton на взаимодействие в ангуляре
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkRadioDisabledEmpty(selector: any, num?:number) {
        await test.step(`Проверка пустого radiobutton на взаимодействие`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/.*disabled.*/) // /(?!checked)disabled/
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkRadioDisabledEmpty: FAIL..........Radio button "${sel}" not disabled.`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkRadioDisabledEmpty: Radio button "${selector}" not disabled.`);
            }
        })
    }
    






    /**
     *
     * @brief Проверка checkbox в ангуляре на взаимодействие и пустоту
     * @param {*} selector
     * @param {boolean} active
     * @param {boolean} checked
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkBoxState(selector: any, active: boolean, checked: boolean, num?:number) {
        await test.step(`Проверка checkbox на взаимодействие и пустоту`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                if (active == true) {
                    await expect(box).toHaveClass(/^(?!.*disabled).*/)
                }
                else if (active == false) {
                    await expect(box).toHaveClass(/.*disabled.*/)
                }
                if (checked == true) {
                    await expect(box).toHaveClass(/.*checked.*/)
                }
                else if (checked == false) {
                    await expect(box).toHaveClass(/^.*(?!checked).*/)
                }
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Checkbox found:  ${selector}`)
            } catch {
                // console.error('\x1b[31m%s\x1b[0m', `checkBoxState: FAIL..........Checkbox not found or has unexpected classes: ${sel}`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkBoxState: Checkbox not found or has unexpected classes: ${selector}`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка checkbox в ангуляре
     * @param {*} selector
     * @param {boolean} [click]
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkBox(selector: any, click?: boolean, num?:number) {
        var selector1 = [...selector]
        var sel = await this.ConstructionSelector(selector1,num)
        if (click)
            var text = "Проверка checkbox и нажать на него"
        else
            var text = "Проверка checkbox"
        await test.step(text, async () => {
            try {
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/.*checked.*/)
                if (click)
                    await this.page.click(sel);
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkBoxState: FAIL..........Checkbox "${sel}" not found.`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkBoxState: Checkbox "${sel}" not found.`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка пустого checkbox в ангуляре
     * @param {*} selector
     * @param {boolean} [click]
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkBoxEmpty(selector: any, click?: boolean, num?:number) {
        var selector1 = [...selector]
        var sel = await this.ConstructionSelector(selector1,num)
        if (click)
            var text = "Проверка пустого checkbox и нажать на него"
        else
            var text = "Проверка пустого checkbox"
        await test.step(text, async () => {
            try {
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/^.*(?!checked).*/)
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkBoxEmpty: FAIL..........Checkbox "${sel}" not found.`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkBoxEmpty: Checkbox "${sel}" not found.`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка checkbox на взаимодействие в ангуляре
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkBoxDisabled(selector: any, num?:number) {
        await test.step(`Проверка checkbox на взаимодействие `, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/checked(.*)disabled/)
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkBoxDisabled: FAIL..........Checkbox "${sel}" not disabled`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkBoxDisabled: Checkbox "${selector}" not disabled`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка пустого checkbox на взаимодействие в ангуляре
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkBoxDisabledEmpty(selector: any,num?:number) {
        await test.step(`Проверка пустого checkbox на взаимодействие`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                await expect(box).toHaveClass(/.*disabled.*/) // /(?!checked)disabled/
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkBoxDisabledEmpty: FAIL..........Checkbox "${sel}" not disabled`);
                throw new Error(`[TESTERR   ] [SELECTOR] checkBoxDisabledEmpty: Checkbox "${selector}" not disabled`);
            }
        })
    }
   






    /**
     *
     * @brief Проверить, доступен ли для обозрения выбранный(не текст) элемент(не активного)
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async SelectorDisabled(selector: any, num?:number) {
        await test.step(`Проверить, доступен ли для обозрения выбранный элемент`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const box = this.page.locator(sel)
                await expect(box).toBeDisabled()
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector NOT found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `SelectorDisabled: FAIL..........Selector "${sel}" NOT disabled`);
                throw new Error(`[TESTERR   ] [SELECTOR] SelectorDisabled: Selector "${selector}" not disabled`);
            }
        })
    }
   






    /**
     * @brief Проверка наличия текста у элемента (Не инпут)
     *
     * @param {*} selector
     * @param {(string | RegExp)} text
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkItemHasText(selector: any, text: string | RegExp, num?:number) {
        await test.step(`Проверка наличия текста у элемента`, async () => {
            await this.checkAndClick(selector, "Проверка видимости селектора", {}, true)
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const locator = await this.page.locator(sel);
                // console.log("locator " + locator)
                try {
                    await locator.waitFor({ state: "visible" });
                } catch (e) {
                    throw new Error(`[TESTERR   ] [SELECTOR] checkItemHasText: Selector "${sel}" not found.`);
                }
                // console.log(await expect(locator).toHaveText(text));
                await expect(locator).toHaveText(text);
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkItemHasText: Selector "${sel}" does not contain text "${text}"`);
                throw new Error(`[TESTERR   ] [TEXT    ] checkItemHasText: Selector "${selector}" does not contain text "${text}"`);
            }
        })
    }
   






    /**
     * @brief Проверка наличия текста у элемента (Инпут)
     *
     * @param {*} selector
     * @param {string} value
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkItemHasValue(selector: any, value: string, num?:number) {
        await test.step(`Проверка наличия текста у элемента`, async () => {
            await this.checkAndClick(selector, "Проверка видимости селектора", {}, true)
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                await this.page.waitForTimeout(500);
                const locator = await this.page.locator(sel);
                try {
                    await locator.waitFor({ state: "visible" });
                } catch (e) {
                    throw new Error(`[TESTERR   ] [SELECTOR] checkItemHasValue: Selector "${sel}" not found.`);
                }
                await expect(locator).toHaveValue(value);
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkItemHasValue: FAIL..........Selector "${sel}" does not contain text "${value}"`);
                throw new Error(`[TESTERR   ] [TEXT    ] checkItemHasValue: Selector "${selector}" does not contain text "${value}"`);
            }
        })
    }
   






    /**
     * @brief Проверка загрузки
     *
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkDownload(selector: any, num?: number) {
        await test.step(`Проверка загрузки`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const [download] = await Promise.all([
                    this.page.waitForEvent('download'),
                    this.page.locator(sel).first().click(),
                ]);
                const path_to_file = await download.path();
                await expect(path_to_file).not.toEqual(null)
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkDownload: FAIL..........Downloading of file was failed [Selector: ${sel}]`);
                throw new Error(`[FUNCERR   ] checkDownload: File download failed [Selector: ${selector}]`);
            }
        })
    }
   






    /**
     *
     * @brief Проверка загрузки файла
     * @param {*} selector
     * @param {string} path
     * @param {number} [num]
     * @memberof Custom_F
     */
    async ImportFileToPage(selector: any, path: string,num?:number) {
        await test.step(`Проверка загрузки файла`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                const [fileChooser] = await Promise.all([
                    // It is important to call waitForEvent before click to set up waiting.
                    this.page.waitForEvent('filechooser'),
                    this.page.locator(sel).click()
                ]);
                await fileChooser.setFiles(path);
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Selector found:  ${selector}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `ImportFileToPage: FAIL..........File import was failed`);
                throw new Error(`[FUNCERR   ] ImportFileToPage: File import failed [Selector: ${selector}, File path: ${path}]`);
            }
        })
    }
   






    /**
     *  @brief функция по проверке окна печати
     *
     * @param {RegExp} responseRX
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async checkPrintWindow(responseRX: RegExp, selector: any, num?: number) {
        await test.step(`Проверка открытия окна печати`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                // Блоб не работает на firefox
                // const [response] = await Promise.all([
                //     this.page.waitForResponse(/^blob:/),
                //     this.page.locator(sel).click()
                // ])
                const [response] = await Promise.all([
                    this.page.waitForResponse(responseRX),
                    this.page.locator(sel).click()
                ])
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `checkPrintWindow: FAIL..........Map key not found: ${sel}`);
                throw new Error(`[FUNCERR   ] checkPrintWindow: Print window wasn't open.`);
            }
        })
    }
   






    /**
     * @brief Поиск ключа по селектору в мапе
     *
     * @param {*} selector
     * @param {number} [num]
     * @memberof Custom_F
     */
    async CheckSelectorInMap(selector: any, num?: number) {
        await test.step(`Поиск ключа по селектору в мапе`, async () => {
            try {
                var selector1 = [...selector]
                var sel = await this.ConstructionSelector(selector1,num)
                await this.checkSelector(sel)
                // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Map key found: ${sel}`);
            } catch (e) {
                // console.error('\x1b[31m%s\x1b[0m', `CheckSelectorInMap: FAIL..........Map key not found: ${sel}`);
                throw new Error(`[TESTERR   ] [SELECTOR] CheckSelectorInMap: Selector "${selector}" not found.`);
            }
        })
    }
    






    /**
     * @brief функция по пробеганию массива селекторов и сверке их с массивом значений(Не инпут)
     *
     * @param {*} map
     * @param {*} arr_selectors
     * @param {*} arr_value
     * @memberof Custom_F
     */
    async CheckTextInSelectors(map: any, arr_selectors: any, arr_value: any) {
        // try {
            for (let index = 0; index < arr_selectors.length; index++) {
                await this.checkItemHasText(map.get(arr_selectors[index]), arr_value[index])
            }
            // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Array found:  ${arr_selectors}`);
        // } catch (e) {
        //    // console.error('\x1b[31m%s\x1b[0m', `CheckTextInSelectors: FAIL..........Array not found: ${arr_selectors}`);
        //    throw new Error(`[TESTERR   ] CheckTextInSelectors: Texts were not found in selectors [Values: ${arr_value}, Selectors: ${arr_selectors}]`);
        // }
    }
   






    /**
     * @brief функция по пробеганию массива селекторов и сверке их с массивом значений(Инпут)
     *
     * @param {*} map
     * @param {*} arr_selectors
     * @param {*} arr_value
     * @memberof Custom_F
     */
    async CheckValueInSelectors(map: any, arr_selectors: any, arr_value: any) {
        // try {
            for (let index = 0; index < arr_selectors.length; index++) {
                await this.checkItemHasValue(map.get(arr_selectors[index])['selector'], arr_value[index]);
            }
            // console.log('\x1b[32m%s\x1b[0m', `SUCCESS..........Array found:  ${arr_selectors}`);
        // } catch (e) {
        //     // console.error('\x1b[31m%s\x1b[0m', `CheckValueInSelectors: FAIL..........Array not found: ${arr_selectors}`);
        //     throw new Error(`[TESTERR   ] [] CheckValueInSelectors: Values were not found in selectors [Values: ${arr_value}, Selectors: ${arr_selectors}]`);
        // }
    }
}

    