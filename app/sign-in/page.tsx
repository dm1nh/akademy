import SignIn from "./sign-in"

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h3 className="text-4xl font-bold">Sign In</h3>
      <div className="min-w-[400px]">
        <SignIn />
      </div>
    </div>
  )
}
