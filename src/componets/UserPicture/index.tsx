import userImage from "../../assets/perfil_preview_rev_1.png";

export default function UserPicture() {
  return (
    <div className="bg-cyan-400 rounded-full flex justify-center items-center overflow-hidden size-96 shadow-neon">
      <img src={userImage} alt="Perfil - João Miguel" />
    </div>
  );
}
