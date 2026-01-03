import { supabase } from "../../Utilities/supabaseClient";

export async function uploadProfilePic(file, email) {
    if (!file) return null;

    const ext = file.name.split(".").pop();
    const fileName = `profile_${email}_${Date.now()}.${ext}`;

    const { data, error } = await supabase
        .storage
        .from("Profile-Image")
        .upload(fileName, file);

    if (error) throw error;

    const { data: publicUrlData } = supabase
        .storage
        .from("Profile-Image")
        .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
}

export async function uploadWorkImages(files, email) {
    const urls = [];

    console.log(import.meta.env.VITE_SUPABASE_ANON_KEY) // should print truncated value


    for (const img of files) {
        if (!img || !img.file) continue;

        const ext = img.file.name.split(".").pop();
        const fileName = `work_${email}_${Date.now()}.${ext}`;

        const { data, error } = await supabase.storage
            .from("work_images")
            .upload(fileName, img.file, {
                cacheControl: "3600",
                upsert: false,
                contentType: img.file.type, // 🔥 REQUIRED FIX
            });

        if (error) {
            console.error("Upload error:", error);
            continue;
        }

        const { data: publicUrlData } = supabase
            .storage
            .from("work_images")
            .getPublicUrl(fileName);

        urls.push(publicUrlData.publicUrl);
    }

    return urls;
}


