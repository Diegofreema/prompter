import Prompt from '@/models/prompt';
import { connectToDB } from '@/utils/database';

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    const prompt = await Prompt.find({
      creator: params.id,
    }).populate('creator');

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response('Failed to get all post', {
      status: 500,
    });
  }
};
