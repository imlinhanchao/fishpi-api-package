import { request, domain } from './utils';

class Emoji
{
    private _apiKey:string = '';

    constructor(token:string='') {
        if (!token) { return; }
        this._apiKey = token;
    }

    /**
     * 重新设置请求 Token
     * @param apiKey 接口 API Key
     */
    setToken(token:string) {
        this._apiKey = token;
    }

    get default() {
        return {
            "doge": "https://cdn.jsdelivr.net/npm/vditor@3.8.7/dist/images/emoji/doge.png",
            "trollface": "https://cdn.jsdelivr.net/npm/vditor@3.8.7/dist/images/emoji/trollface.png",
            "huaji": "https://cdn.jsdelivr.net/npm/vditor@3.8.7/dist/images/emoji/huaji.gif",
            "octocat": "https://cdn.jsdelivr.net/npm/vditor@3.8.7/dist/images/emoji/octocat.png",
            "wulian": "https://cdn.jsdelivr.net/npm/vditor@3.8.7/dist/images/emoji/wulian.png",
            "smile": `https://${domain}/emoji/graphics/smile.png`,
            "laughing": `https://${domain}/emoji/graphics/laughing.png`,
            "blush": `https://${domain}/emoji/graphics/blush.png`,
            "smiley": `https://${domain}/emoji/graphics/smiley.png`,
            "relaxed": `https://${domain}/emoji/graphics/relaxed.png`,
            "smirk": `https://${domain}/emoji/graphics/smirk.png`,
            "heart_eyes": `https://${domain}/emoji/graphics/heart_eyes.png`,
            "kissing_heart": `https://${domain}/emoji/graphics/kissing_heart.png`,
            "kissing_closed_eyes": `https://${domain}/emoji/graphics/kissing_closed_eyes.png`,
            "flushed": `https://${domain}/emoji/graphics/flushed.png`,
            "relieved": `https://${domain}/emoji/graphics/relieved.png`,
            "satisfied": `https://${domain}/emoji/graphics/satisfied.png`,
            "grin": `https://${domain}/emoji/graphics/grin.png`,
            "wink": `https://${domain}/emoji/graphics/wink.png`,
            "stuck_out_tongue_winking_eye": `https://${domain}/emoji/graphics/stuck_out_tongue_winking_eye.png`,
            "stuck_out_tongue_closed_eyes": `https://${domain}/emoji/graphics/stuck_out_tongue_closed_eyes.png`,
            "grinning": `https://${domain}/emoji/graphics/grinning.png`,
            "kissing": `https://${domain}/emoji/graphics/kissing.png`,
            "kissing_smiling_eyes": `https://${domain}/emoji/graphics/kissing_smiling_eyes.png`,
            "stuck_out_tongue": `https://${domain}/emoji/graphics/stuck_out_tongue.png`,
            "sleeping": `https://${domain}/emoji/graphics/sleeping.png`,
            "worried": `https://${domain}/emoji/graphics/worried.png`,
            "frowning": `https://${domain}/emoji/graphics/frowning.png`,
            "anguished": `https://${domain}/emoji/graphics/anguished.png`,
            "open_mouth": `https://${domain}/emoji/graphics/open_mouth.png`,
            "grimacing": `https://${domain}/emoji/graphics/grimacing.png`,
            "confused": `https://${domain}/emoji/graphics/confused.png`,
            "hushed": `https://${domain}/emoji/graphics/hushed.png`,
            "expressionless": `https://${domain}/emoji/graphics/expressionless.png`,
            "unamused": `https://${domain}/emoji/graphics/unamused.png`,
            "sweat_smile": `https://${domain}/emoji/graphics/sweat_smile.png`,
            "sweat": `https://${domain}/emoji/graphics/sweat.png`,
            "disappointed_relieved": `https://${domain}/emoji/graphics/disappointed_relieved.png`,
            "weary": `https://${domain}/emoji/graphics/weary.png`,
            "pensive": `https://${domain}/emoji/graphics/pensive.png`,
            "disappointed": `https://${domain}/emoji/graphics/disappointed.png`,
            "confounded": `https://${domain}/emoji/graphics/confounded.png`,
            "fearful": `https://${domain}/emoji/graphics/fearful.png`,
            "cold_sweat": `https://${domain}/emoji/graphics/cold_sweat.png`,
            "persevere": `https://${domain}/emoji/graphics/persevere.png`,
            "cry": `https://${domain}/emoji/graphics/cry.png`,
            "sob": `https://${domain}/emoji/graphics/sob.png`,
            "joy": `https://${domain}/emoji/graphics/joy.png`,
            "astonished": `https://${domain}/emoji/graphics/astonished.png`,
            "scream": `https://${domain}/emoji/graphics/scream.png`,
            "tired_face": `https://${domain}/emoji/graphics/tired_face.png`,
            "angry": `https://${domain}/emoji/graphics/angry.png`,
            "rage": `https://${domain}/emoji/graphics/rage.png`,
            "triumph": `https://${domain}/emoji/graphics/triumph.png`,
            "sleepy": `https://${domain}/emoji/graphics/sleepy.png`,
            "yum": `https://${domain}/emoji/graphics/yum.png`,
            "mask": `https://${domain}/emoji/graphics/mask.png`,
            "sunglasses": `https://${domain}/emoji/graphics/sunglasses.png`,
            "dizzy_face": `https://${domain}/emoji/graphics/dizzy_face.png`,
            "imp": `https://${domain}/emoji/graphics/imp.png`,
            "smiling_imp": `https://${domain}/emoji/graphics/smiling_imp.png`,
            "neutral_face": `https://${domain}/emoji/graphics/neutral_face.png`,
            "no_mouth": `https://${domain}/emoji/graphics/no_mouth.png`,
            "innocent": `https://${domain}/emoji/graphics/innocent.png`,
            "alien": `https://${domain}/emoji/graphics/alien.png`,
            "yellow_heart": `https://${domain}/emoji/graphics/yellow_heart.png`,
            "blue_heart": `https://${domain}/emoji/graphics/blue_heart.png`,
            "purple_heart": `https://${domain}/emoji/graphics/purple_heart.png`,
            "heart": `https://${domain}/emoji/graphics/heart.png`,
            "green_heart": `https://${domain}/emoji/graphics/green_heart.png`,
            "broken_heart": `https://${domain}/emoji/graphics/broken_heart.png`,
            "heartbeat": `https://${domain}/emoji/graphics/heartbeat.png`,
            "heartpulse": `https://${domain}/emoji/graphics/heartpulse.png`,
            "two_hearts": `https://${domain}/emoji/graphics/two_hearts.png`,
            "revolving_hearts": `https://${domain}/emoji/graphics/revolving_hearts.png`,
            "cupid": `https://${domain}/emoji/graphics/cupid.png`,
            "sparkling_heart": `https://${domain}/emoji/graphics/sparkling_heart.png`,
            "sparkles": `https://${domain}/emoji/graphics/sparkles.png`,
            "star": `https://${domain}/emoji/graphics/star.png`,
            "star2": `https://${domain}/emoji/graphics/star2.png`,
            "dizzy": `https://${domain}/emoji/graphics/dizzy.png`,
            "boom": `https://${domain}/emoji/graphics/boom.png`,
            "collision": `https://${domain}/emoji/graphics/collision.png`,
            "anger": `https://${domain}/emoji/graphics/anger.png`,
            "exclamation": `https://${domain}/emoji/graphics/exclamation.png`,
            "question": `https://${domain}/emoji/graphics/question.png`,
            "grey_exclamation": `https://${domain}/emoji/graphics/grey_exclamation.png`,
            "grey_question": `https://${domain}/emoji/graphics/grey_question.png`,
            "zzz": `https://${domain}/emoji/graphics/zzz.png`,
            "dash": `https://${domain}/emoji/graphics/dash.png`,
            "sweat_drops": `https://${domain}/emoji/graphics/sweat_drops.png`,
            "notes": `https://${domain}/emoji/graphics/notes.png`,
            "musical_note": `https://${domain}/emoji/graphics/musical_note.png`,
            "fire": `https://${domain}/emoji/graphics/fire.png`,
            "poop": `https://${domain}/emoji/graphics/poop.png`,
            "+1": `https://${domain}/emoji/graphics/%2B1.png`,
            "thumbsup": `https://${domain}/emoji/graphics/thumbsup.png`,
            "-1": `https://${domain}/emoji/graphics/-1.png`,
            "thumbsdown": `https://${domain}/emoji/graphics/thumbsdown.png`,
            "ok_hand": `https://${domain}/emoji/graphics/ok_hand.png`,
            "punch": `https://${domain}/emoji/graphics/punch.png`,
            "facepunch": `https://${domain}/emoji/graphics/facepunch.png`,
            "fist": `https://${domain}/emoji/graphics/fist.png`,
            "v": `https://${domain}/emoji/graphics/v.png`,
            "wave": `https://${domain}/emoji/graphics/wave.png`,
            "hand": `https://${domain}/emoji/graphics/hand.png`,
            "raised_hand": `https://${domain}/emoji/graphics/raised_hand.png`,
            "open_hands": `https://${domain}/emoji/graphics/open_hands.png`,
            "point_up": `https://${domain}/emoji/graphics/point_up.png`,
            "point_down": `https://${domain}/emoji/graphics/point_down.png`,
            "point_left": `https://${domain}/emoji/graphics/point_left.png`,
            "point_right": `https://${domain}/emoji/graphics/point_right.png`,
            "raised_hands": `https://${domain}/emoji/graphics/raised_hands.png`,
            "pray": `https://${domain}/emoji/graphics/pray.png`,
            "point_up_2": `https://${domain}/emoji/graphics/point_up_2.png`,
            "clap": `https://${domain}/emoji/graphics/clap.png`,
            "muscle": `https://${domain}/emoji/graphics/muscle.png`,
            "couple": `https://${domain}/emoji/graphics/couple.png`,
            "family": `https://${domain}/emoji/graphics/family.png`,
            "two_men_holding_hands": `https://${domain}/emoji/graphics/two_men_holding_hands.png`,
            "two_women_holding_hands": `https://${domain}/emoji/graphics/two_women_holding_hands.png`,
            "dancer": `https://${domain}/emoji/graphics/dancer.png`,
            "dancers": `https://${domain}/emoji/graphics/dancers.png`,
            "ok_woman": `https://${domain}/emoji/graphics/ok_woman.png`,
            "no_good": `https://${domain}/emoji/graphics/no_good.png`,
            "information_desk_person": `https://${domain}/emoji/graphics/information_desk_person.png`,
            "raising_hand": `https://${domain}/emoji/graphics/raising_hand.png`,
            "bride_with_veil": `https://${domain}/emoji/graphics/bride_with_veil.png`,
            "person_with_pouting_face": `https://${domain}/emoji/graphics/person_with_pouting_face.png`,
            "person_frowning": `https://${domain}/emoji/graphics/person_frowning.png`,
            "bow": `https://${domain}/emoji/graphics/bow.png`,
            "couplekiss": `https://${domain}/emoji/graphics/couplekiss.png`,
            "couple_with_heart": `https://${domain}/emoji/graphics/couple_with_heart.png`,
            "massage": `https://${domain}/emoji/graphics/massage.png`,
            "haircut": `https://${domain}/emoji/graphics/haircut.png`,
            "nail_care": `https://${domain}/emoji/graphics/nail_care.png`,
            "boy": `https://${domain}/emoji/graphics/boy.png`,
            "girl": `https://${domain}/emoji/graphics/girl.png`,
            "woman": `https://${domain}/emoji/graphics/woman.png`,
            "man": `https://${domain}/emoji/graphics/man.png`,
            "baby": `https://${domain}/emoji/graphics/baby.png`,
            "older_woman": `https://${domain}/emoji/graphics/older_woman.png`,
            "older_man": `https://${domain}/emoji/graphics/older_man.png`,
            "person_with_blond_hair": `https://${domain}/emoji/graphics/person_with_blond_hair.png`,
            "man_with_gua_pi_mao": `https://${domain}/emoji/graphics/man_with_gua_pi_mao.png`,
            "man_with_turban": `https://${domain}/emoji/graphics/man_with_turban.png`,
            "construction_worker": `https://${domain}/emoji/graphics/construction_worker.png`,
            "cop": `https://${domain}/emoji/graphics/cop.png`,
            "angel": `https://${domain}/emoji/graphics/angel.png`,
            "princess": `https://${domain}/emoji/graphics/princess.png`,
            "smiley_cat": `https://${domain}/emoji/graphics/smiley_cat.png`,
            "smile_cat": `https://${domain}/emoji/graphics/smile_cat.png`,
            "heart_eyes_cat": `https://${domain}/emoji/graphics/heart_eyes_cat.png`,
            "kissing_cat": `https://${domain}/emoji/graphics/kissing_cat.png`,
            "smirk_cat": `https://${domain}/emoji/graphics/smirk_cat.png`,
            "scream_cat": `https://${domain}/emoji/graphics/scream_cat.png`,
            "crying_cat_face": `https://${domain}/emoji/graphics/crying_cat_face.png`,
            "joy_cat": `https://${domain}/emoji/graphics/joy_cat.png`,
            "pouting_cat": `https://${domain}/emoji/graphics/pouting_cat.png`,
            "japanese_ogre": `https://${domain}/emoji/graphics/japanese_ogre.png`,
            "japanese_goblin": `https://${domain}/emoji/graphics/japanese_goblin.png`,
            "see_no_evil": `https://${domain}/emoji/graphics/see_no_evil.png`,
            "hear_no_evil": `https://${domain}/emoji/graphics/hear_no_evil.png`,
            "speak_no_evil": `https://${domain}/emoji/graphics/speak_no_evil.png`,
            "guardsman": `https://${domain}/emoji/graphics/guardsman.png`,
            "skull": `https://${domain}/emoji/graphics/skull.png`,
            "feet": `https://${domain}/emoji/graphics/feet.png`,
            "lips": `https://${domain}/emoji/graphics/lips.png`,
            "kiss": `https://${domain}/emoji/graphics/kiss.png`,
            "droplet": `https://${domain}/emoji/graphics/droplet.png`,
            "ear": `https://${domain}/emoji/graphics/ear.png`,
            "eyes": `https://${domain}/emoji/graphics/eyes.png`,
            "nose": `https://${domain}/emoji/graphics/nose.png`,
            "tongue": `https://${domain}/emoji/graphics/tongue.png`,
            "love_letter": `https://${domain}/emoji/graphics/love_letter.png`,
            "bust_in_silhouette": `https://${domain}/emoji/graphics/bust_in_silhouette.png`,
            "busts_in_silhouette": `https://${domain}/emoji/graphics/busts_in_silhouette.png`,
            "speech_balloon": `https://${domain}/emoji/graphics/speech_balloon.png`,
            "thought_balloon": `https://${domain}/emoji/graphics/thought_balloon.png`
        }
    }

    async get ():Promise<Array<string>> {
        let rsp;
        try {
            rsp = await request({
                url: `api/cloud/get`,
                method: 'post',
                data: {
                    gameId: 'emojis',
                    apiKey: this._apiKey
                },
            });

            if (rsp.status === 401) {throw new Error('登录已失效，请重新登录！');}

            return JSON.parse(rsp.data.data);            
        } catch (e) {
            throw e;
        }
    }

    /**
     * 设置表情包列表
     * @param data 所有表情包图像列表
     */
    async set (data:Array<string>) {
        let rsp;
        try {
            rsp = await request({
                url: `api/cloud/sync`,
                method: 'post',
                data: {
                    gameId: 'emojis',
                    data: JSON.stringify(data),
                    apiKey: this._apiKey
                },
            });
    
            if (rsp.status === 401) {
                throw new Error('登录已失效，请重新登录！');
            }
    
            return rsp.data;            
        } catch (e) {
            throw e;
        }
    }
}

export default Emoji;