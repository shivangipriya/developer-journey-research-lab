import {chromium} from '@playwright/test';
import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const server=spawn('node',['node_modules/vite/bin/vite.js','--host','127.0.0.1','--port','4173']);
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'google-chrome',headless:true});
const log=[];let count=0;
try{
 for(let i=0;i<50;i++){try{await fetch('http://127.0.0.1:4173');break;}catch{await new Promise(r=>setTimeout(r,100));}}
 const page=await browser.newPage({viewport:{width:1440,height:1100}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4173');
 assert.equal(await page.locator('.funnelrow').count(),5);count++;log.push('Five funnel stages render.');
 await page.getByLabel('Synthetic cohort').selectOption('First API project');assert.match(await page.locator('.metrics').innerText(),/12/);count++;log.push('Cohort filter changes denominator to12.');
 await page.getByRole('button',{name:'Inspect session evidence'}).click();assert.equal(await page.locator('.finding').count(),2);count++;log.push('Journey handoff opens session evidence.');
 await page.getByRole('button',{name:'Add to evidence board'}).click();assert.match(await page.getByRole('status').innerText(),/Add a statement/);count++;log.push('Incomplete claims cannot be saved.');
 await page.getByLabel('Statement',{exact:true}).fill('<script>alert(1)</script>');await page.getByLabel('Alternative explanation or limit').fill('This is synthetic, not real user data.');await page.getByLabel('Next study or check').fill('Observe setup without hints.');await page.getByRole('button',{name:'Add to evidence board'}).click();assert.equal(await page.locator('.finding').count(),3);assert.ok((await page.locator('.finding').last().innerText()).includes('<script>'));count++;log.push('Claim saves, user text escaped by React, no script execution.');
 
 await page.getByRole('button',{name:'Remove claim 3'}).click();assert.equal(await page.locator('.finding').count(),2);count++;log.push('Custom claim can be removed.');
 await page.getByRole('button',{name:'03 Study plan'}).click();await page.getByRole('button',{name:'Show moderator notes'}).click();assert.ok(await page.locator('.moderator').isVisible());count++;log.push('Moderator notes expand.');
 await page.getByLabel('Simulated model API response').selectOption('402');assert.match(await page.locator('pre').innerText(),/insufficient_quota_error/);count++;log.push('Error study stimulus switches accurately.');
 
 await page.getByRole('button',{name:'04 Research brief'}).click();const [download]=await Promise.all([page.waitForEvent('download'),page.getByRole('button',{name:'Download research brief'}).click()]);await download.saveAs('sample-brief.md');assert.match(fs.readFileSync('sample-brief.md','utf8'),/synthetic/);count++;log.push('Markdown export contains evidence and limits.');
 for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:950});for(const t of ['01 Journey','02 Evidence','03 Study plan','04 Research brief']){await page.getByRole('button',{name:t}).click();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}:${t} overflow`);count++;}log.push(`No horizontal overflow on four tabs at${width}px.`);}
 await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'01 Journey'}).click();await page.getByRole('button',{name:'03 Study plan'}).click();
 await page.reload();await page.getByRole('button',{name:'02 Evidence'}).click();assert.equal(await page.locator('.finding').count(),2);count++;log.push('Reload returns to default synthetic notes, no persistence.');
 assert.deepEqual(errors,[]);count++;log.push('No browser exceptions.');
 console.log(JSON.stringify({checks:count,passed:true,log},null,2));
}finally{await browser.close();server.kill();}
