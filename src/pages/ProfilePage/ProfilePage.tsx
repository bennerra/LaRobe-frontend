import { FormProvider, useForm } from "react-hook-form";
import { FC, useEffect, useState } from "react";

import { useProfileMutation } from "@/store/api/authApi";
import { ProfileHeader } from "@/components/ProfileHeader/ProfileHeader";
import { Container } from "@/layoutes/Container/Container";
import PhotoIcon from "@/assets/images/photo.svg";
import StarIcon from "@/assets/images/star.svg";
import PencilIcon from "@/assets/images/pencil.svg";
import { Storage } from "@/constants/storage";
import { TextareaField } from "@/components/HookFields/TextareaField";
import { Button } from "@/ui/Button/Button";
import { AppRoutes } from "@/constants/paths";
import { Modal } from "@/ui/Modal";
import { FileInput } from "@/ui/FileInput/FileInput";

import styles from "./styles.module.scss";

const RATING = 3;

type Props = {
  isOwner?: boolean;
};

export const ProfilePage: FC<Props> = ({ isOwner = false }) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [aboutMe, setAboutMe] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isOpenBannerModal, setIsOpenBannerModal] = useState<boolean>(false);
  const [isOpenAvatarModal, setIsOpenAvatarModal] = useState<boolean>(false);
  const [banner, setBanner] = useState<File[] | null>(null);
  const [avatar, setAvatar] = useState<File[] | null>(null);
  const [register] = useProfileMutation();
  const methods = useForm();

  const handleChangeIsEitMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const handleChangeBannerModalOpen = () => {
    setIsOpenBannerModal((prev) => !prev);
  };

  const handleChangeAvatarModalOpen = () => {
    setIsOpenAvatarModal((prev) => !prev);
  };

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
    });
  }, []);

  return (
    <FormProvider {...methods}>
      <form>
        <div className={styles.profilePage}>
          <ProfileHeader />
          <div className={styles.banner}>
            <img
              src={
                bannerUrl ||
                "https://avatars.mds.yandex.net/i?id=c9cece58e68292b06bebb3e016f48235_l-10701700-images-thumbs&n=13"
              }
              alt="banner"
            />
            {isEditMode && (
              <div
                className={styles.editIcon}
                onClick={handleChangeBannerModalOpen}
              >
                <PencilIcon style={{ fill: "#373737" }} />
              </div>
            )}
          </div>
          <Container>
            <div className={styles.content}>
              <div className={styles.profileInfo}>
                <div className={styles.photo}>
                  <div className={styles.photoIcon}>
                    <PhotoIcon />
                  </div>
                  {isEditMode && (
                    <div
                      className={styles.editIcon}
                      onClick={handleChangeAvatarModalOpen}
                    >
                      <PencilIcon style={{ fill: "#373737" }} />
                    </div>
                  )}
                  <img
                    src={
                      avatarUrl ||
                      "https://i.pinimg.com/originals/c2/e4/ac/c2e4ac180e9de04d53b925ac2b6573a9.jpg"
                    }
                    alt="avatar"
                  />
                </div>
                <div className={styles.infoText}>
                  <div className={styles.infoName}>Фамилия Имя</div>
                  <div className={styles.description}>
                    {isEditMode ? (
                      <TextareaField
                        name="description"
                        placeholder="Добавьте информацию о себе"
                        defaultValue="Какая-то информация о пользователе"
                      />
                    ) : (
                      <div className={styles.descriptionText}>
                        Какая-то информация о пользователе
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.reviews}>
                <div className={styles.reviewTitle}>Отзывы</div>
                <div className={styles.reviewList}>
                  <div className={styles.review}>
                    <div className={styles.reviewTop}>
                      <div className={styles.reviewDate}>24.10.24</div>
                      <div className={styles.reviewStars}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon
                            key={i}
                            style={{ fill: i < RATING ? "#FFCF0F" : "#8E8E8E" }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className={styles.reviewName}>Платье-сарафан</div>
                    <div className={styles.reviewDescription}>
                      Платье очень понравилось! Размер соответветствует
                      размерной сетке. Цвет как на фото. Материал очень
                      качественный. Берите, не пожалеете!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isOwner && (
              <>
                {isEditMode ? (
                  <div className={styles.applyEditButton}>
                    <Button view="accent" text="Применить" />
                  </div>
                ) : (
                  <div
                    className={styles.editButton}
                    onClick={handleChangeIsEitMode}
                  >
                    <PencilIcon style={{ fill: "#FBE6D3" }} />
                  </div>
                )}
              </>
            )}
            {isOpenBannerModal && (
              <Modal
                isOpen={isOpenBannerModal}
                onClose={handleChangeBannerModalOpen}
              >
                <FileInput name="banner" getValue={setBanner} withPreview />
              </Modal>
            )}
            {isOpenAvatarModal && (
              <Modal
                isOpen={isOpenAvatarModal}
                onClose={handleChangeAvatarModalOpen}
              >
                <FileInput name="avatar" getValue={setAvatar} withPreview />
              </Modal>
            )}
          </Container>
        </div>
      </form>
    </FormProvider>
  );
};
