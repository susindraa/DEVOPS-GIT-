#done-space 


#space/terraform/snaps 


#goes-to/terraform 


#### 2. **Use Temporary Credentials with Session Token (STS)**
?
- If you're using **MFA or temporary access** (like in corporate environments):
- bash
- Copy code
- `aws sts get-session-token --serial-number arn-of-mfa-device --token-code 123456`
- Store those in your `~/.aws/credentials` as:
- ini
- Copy code
- `[default] aws_access_key_id = TEMP_KEY aws_secret_access_key = TEMP_SECRET aws_session_token = TEMP_TOKEN`
- This still expires—but scripting it + cronjob can help automate it.
<!--SR:!2025-05-02,1,190-->