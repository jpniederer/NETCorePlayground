using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace ReactIdentity.IdentityProvider
{
    public class Config
    {
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("ChallengeApi", "Challenge API")
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "react",
                    ClientName = "React App",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,
                    RequireConsent = false,

                    RedirectUris = {
                        "http://localhost:3000/signin-oidc.html",
                        "http://localhost:3000/silent-redirect.html"
                    },
                    PostLogoutRedirectUris = { "http://localhost:3000/?postLogout=true" },
                    AllowedCorsOrigins = { "http://localhost:3000/" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "ChallengeApi"
                    },
                    IdentityTokenLifetime = 120,
                    AccessTokenLifetime = 120,
                    AllowOfflineAccess = true
                }
            };
        }

        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            };
        }
    }
}
