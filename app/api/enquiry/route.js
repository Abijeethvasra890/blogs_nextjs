import connectMongo from "../../../utils/connectMongo";
import EnquiryModel from "../../../models/enquiryModel"

export async function POST(req){
    try{
        const {name, email, message} = await req.json();
        const enquiry = {name, email,message};
        await connectMongo();
        await EnquiryModel.create(enquiry);
        return Response.json({message: 'Enquiry sent'})
    }catch(err){
        return Response.json({message: err._message})
    }
}