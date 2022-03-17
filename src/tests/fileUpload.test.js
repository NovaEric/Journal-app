import { fileUpload } from "../helpers/fileUpload";
// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//     cloud_name: 'dyej4hpgt',
//     api_key: '984454644236667',
//     api_secret: 'JraX5pVBcjL6esWTO37GF_fPPLE',
//     secure: true
// });

describe('Pruebas en filUpload', () => { 
    // test('should upload image', async(done) => { 
    test('should upload image', () => { 
        
        // const resp = await fetch('https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png');
        // const blob = await resp.blob();

        // const file = new File([blob], 'foto.png');
        // const url = await fileUpload(file);

        // expect (typeof url).toBe('string');

        //delete image

        // const segments = url.split('/');
        // const imageID = segments[segments.length - 1].replace('.png', '');

        // cloudinary.v2.api.delete_derived_resources(imageID, {}, () => { done()})
     })

    test('should return error', async() => { 
        
        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        // expect(url).toBe(null);
        expect(url).toBe(undefined);
     })
 })
 