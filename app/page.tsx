import Image from "next/image";
import {Amplify} from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function Home() {
	return <div>{/* <AmplifySignOut /> */}</div>;
}

export default Home;
