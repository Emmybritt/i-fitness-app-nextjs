import { Image } from "antd";
import { Button } from "../../atoms/Button/Button";

const GoogleAuthButton = () => {
	return (
		<>
			<Button
				label="Sign In with google"
				className="border rounded-md"
				backgroundColor="white"
				rightIcon={<Image src="/images/google.png" height={28} width={28} preview={false} alt="google logo" />}
			/>
		</>
	);
};

export default GoogleAuthButton;
