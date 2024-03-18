// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
function UserInfo() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    useEffect(() => {
        const signInAndOut = async () => {
            try {
                await gitHubSignIn();
            } catch (error) {
                console.error("Error signing in:", error);
            }

            await firebaseSignOut();
        };

        signInAndOut();
    });
    
    return (
        <div>
            <p>
                Welcome, {user.displayName} ({user.email})
            </p>;
        </div>
    );
}

export default UserInfo;
