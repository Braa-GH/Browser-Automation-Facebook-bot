const puppeteer = require('puppeteer')
const dotenv = require('dotenv')
dotenv.config({path: "./.env"})

const start = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000)
    await page.setViewport({width:1000, height:600})

    /** Login **/
    const _uri = "https://www.facebook.com/login.php";
    await page.goto(_uri)
    await page.waitForSelector("#email")
    const email = process.env.EMAIL;
    const pass = process.env.PASS;
    await page.type('#email',email)
    await page.type('#pass',pass)
    await page.click("#loginbutton")
    await page.waitForNavigation();

    /** Go to profile page **/
    const profile_url = process.env.PROFILE_URL
    await page.goto(profile_url);
    await page.click("body")

    /** Posting... **/
    const postBox = `.x7ep2pv > div:nth-child(1) > div > div > div > div > .x1cy8zhl > div`;
    // await page.waitForSelector(postBox)
    await page.click(postBox)
    const post = "TEST: this post Published by automated bot!";
    // const field = `[contenteditable="true"]`
    await page.waitForTimeout(2000);
    for (let i = 0; i < post.length; i++) {
        await page.keyboard.type(post[i]);
    }
    await page.waitForTimeout(2000);
    const postBtn = `div > div:nth-child(1) > div > div:nth-child(5) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > form > div > div.x9f619.x1ja2u2z.x1k90msu.x6o7n8i.x1qfuztq.x10l6tqk.x17qophe.x13vifvy.x1hc1fzr.x71s49j > div > div > div > div.x1l90r2v.xyamay9.x1n2onr6 > div.x6s0dn4.x9f619.x78zum5.x1qughib.x1pi30zi.x1swvt13.xyamay9.xh8yej3 > div > div > div.x6s0dn4.x78zum5.xl56j7k.x1608yet.xljgi0e.x1e0frkt`;
    await page.click(postBtn)
    await page.waitForTimeout(2000)

    /** Commenting **/
    const commentBox = `div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x78zum5.xdt5ytf.x1t2pt76 > div > div > div.x6s0dn4.x78zum5.xdt5ytf.x193iq5w > div.x9f619.x193iq5w.x1talbiv.x1sltb1f.x3fxtfs.x1swvt13.x1pi30zi.xw7yly9 > div > div.x9f619.x1n2onr6.x1ja2u2z.xeuugli.xs83m0k.x1xmf6yo.x1emribx.x1e56ztr.x1i64zmx.xjl7jj.x19h7ccj.xu9j1y6.x7ep2pv > div:nth-child(3) > div:nth-child(1) > div > div > div > div > div > div > div > div > div > div > div:nth-child(8) > div > div > div:nth-child(4) > div > div > div.xzueoph > div.x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x12nagc.x1gslohp > div > div > div > div > div.x1r8uery.x1iyjqo2.x6ikm8r.x10wlt62.x4uap5 > div:nth-child(1) > form > div > div.x78zum5.x13a6bvl`;
    await page.click(commentBox);
    await page.keyboard.type("just another step...")
    await page.keyboard.press('Enter')


    console.log("done")
    // await browser.close();
}

const sendMessage = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000)
    await page.setViewport({width:1000, height:600})

    /** Login **/
    const _uri = "https://www.facebook.com/login.php";
    await page.goto(_uri)
    await page.waitForSelector("#email")
    const email = process.env.EMAIL;
    const pass = process.env.PASS;
    await page.type('#email',email)
    await page.type('#pass',pass)
    await page.click("#loginbutton")
    await page.waitForNavigation();

    /** Go to chat page **/
    const chat_url = process.env.CHAT_URL
    await page.goto(chat_url);

    /** send chat... **/
    await page.waitForSelector("div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x193iq5w.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xcrg951.x6prxxf.x85a59c.x6ikm8r.x10wlt62.x1n2onr6 > div > div > div.x9f619.x1ja2u2z.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.xdt5ytf.x6ikm8r.x10wlt62.x1n2onr6 > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div:nth-child(2) > div > div > div.x78zum5.x1iyjqo2.x6q2ic0 > div.xmjcpbm.x107yiy2.xv8uw2v.x1tfwpuw.x2g32xy.x9f619.x1iyjqo2.xeuugli > div")

         await page.click("body")
    let count = 1;
    // setInterval(async () => {
        await page.keyboard.type(`TEST MESSAGE ${count++}: This message sent by automated bot!`)
        await page.keyboard.press('Enter')
    // },5000)


    console.log("done")
    // await browser.close();
}

start();
// sendMessage()

module.exports = start;