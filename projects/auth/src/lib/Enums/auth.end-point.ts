export class authEndPoint{
    static readonly onlineExamApi='https://exam.elevateegy.com/api/v1/auth/'
    static readonly SignIn= this.onlineExamApi + 'signin'
    static readonly SignUp= this.onlineExamApi + 'signup'
    static readonly changePassword= this.onlineExamApi + 'changePassword'
    static readonly deleteMe= this.onlineExamApi + 'deleteMe'
    static readonly editProfile= this.onlineExamApi + 'editProfile'
    static readonly logout= this.onlineExamApi + 'logout'
    static readonly profileData= this.onlineExamApi + 'profileData'
    static readonly forgotPassword= this.onlineExamApi + 'forgotPassword'
    static readonly verifyResetCode= this.onlineExamApi + 'verifyResetCode'
    static readonly resetPassword= this.onlineExamApi + 'resetPassword'
}