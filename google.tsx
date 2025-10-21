import { LoadingButton } from "@mui/lab";
import { GoogleLogin } from "@react-oauth/google";

export const GoogleButton = () => {
  return (
    <LoadingButton
      aria-label="Google Login"
      fullWidth
      variant="outlined"
      className="relative flex items-center justify-center border border-1"
    >
      <span className="opacity-0 absolute inset-0 z-20">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            onClick?.()
            responseGoogle(credentialResponse)
          }}
          onError={() => {
            console.error("Google Login Failed")
            alertDefaultError(new Error("Google Login Failed"))
          }}
        />
      </span>
      <img src="google.svg" className="w-6 h-6 absolute left-6" />
      Sign Up By Google
    </LoadingButton>
  )
}
