import {useEffect, useState} from "react";
import {Storage} from "@/constants/storage";
import {AppRoutes} from "@/constants/paths";
import {useProfileMutation} from "@/store/api/authApi";

export const ProfilePage = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [aboutMe, setAboutMe] = useState<string | null>(null);
  const [register] = useProfileMutation();

  useEffect(() => {
    if (!localStorage.getItem(Storage.token)) {
      window.location.href = AppRoutes.AUTH;
    }
    register(null).then((data) => {
      // @ts-ignore
      setAboutMe(data.about_me);
      // @ts-ignore
      setAvatarUrl(data.avatar);
      // @ts-ignore
      setBannerUrl(data.banner_url);
    })
  }, []);

  return (
    <div style={{width: "100px", height: "100px", display: "flex"}}>
      <img
        src={bannerUrl || "https://avatars.mds.yandex.net/i?id=c9cece58e68292b06bebb3e016f48235_l-10701700-images-thumbs&n=13"}/>
      <img src={avatarUrl || "https://i.pinimg.com/originals/c2/e4/ac/c2e4ac180e9de04d53b925ac2b6573a9.jpg"}/>
      <div>

      <textarea rows={5}
                cols={50} id="about_me" defaultValue={aboutMe || "Вы пока ничего не рассказали о себе"}/>
      </div>
      <button>update profile</button>
    </div>
  )

}