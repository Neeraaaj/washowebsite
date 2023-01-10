import {google} from 'googleapis'

async function handler(req,res){
    if(req.method==='POST'){
        const{Name,Email,Mobile,Service,Appointment,Time} = req.body;
        console.log(Name,Email,Mobile,Service,Appointment,Time);

        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email: process.env.CLIENT_EMAIL,
                client_id: process.env.CLIENT_ID,
                private_key: process.env.PRIVATE_KEY.split(String.raw`\n`).join('\n'),
                token_url: process.env.TOKEN_URI,
            },
            scopes:[
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ],
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        })
        
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: '1vJ3BhY0pZmnMaWOCSwv_AVkltZXEfdMMfzDRG1LKHIw',
            range: 'Sheet1!A2:C',
            valueInputOption: 'USER_ENTERED',
            requestBody:{
                values:[[Name,Email,Mobile,Service,Appointment,Time]]
            }
        })

        res.status(201).json({message: 'Data successfully appended', response});
    }

    res.status(200).json({message:'Thank You'});
}    

export default handler;