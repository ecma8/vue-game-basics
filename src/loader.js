import {Sprite} from 'pixi.js';
const PIXI_SPINE = require('pixi-spine');
let projectName = process.env.PROJECT_NAME;
let resourcePath = '';
if(process.env.NODE_ENV === 'production'){
    resourcePath = './'
}else{
    resourcePath = projectName;
}
let loader = PIXI.loader;
console.log(`public/${projectName}/resource/content.json`);
export function load() {
    if(!window.res){
        console.info(1);
        return new Promise((resolve, reject) => {
            loader.add('question',`${resourcePath}/resource/content.json`);
            loader.add('resources',`${resourcePath}/resource/resource.json`);
            loader.load(() => {
                console.log(PIXI.loader.resources,111111111111);
                let content = PIXI.loader.resources["resources"].data;
                content.forEach(value => {
                    loader.add(value.key, value.path);
                });
                loader.load((l,r) =>{
                    window.res = r;
                    resolve(r)
                });
                loader.onError.add((e) => {
                    console.log(e,11111111111);
                });
                loader.onProgress.add((e) => {
                    // console.log("loader加载进程中");
                    document.getElementsByClassName('runner')[0].style.width = e.progress*6.8/100+'rem'
                });
                loader.onComplete.add((e) => {

                    // console.log("loader加载完成");
                });
            });
        })
    }
    else{
        return new Promise((resolve, reject) => {
            console.info(2);
            resolve(window.res)
        })
    }
}
export function getAnimation(animationStr) {
  return new PIXI.spine.Spine(res[animationStr].spineData)
}

export function getSound(resourceStr) {
  return res[resourceStr].data;
}

export function createSprite(texture) {
  console.log(new Sprite(texture));
  return new Sprite(texture);
}

export function getOptionTexture(resourceJsonStr,texture) {
  return res[resourceJsonStr].textures[texture];
}
export function getTexture(resourceStr) {
  return res[resourceStr].texture;
}
