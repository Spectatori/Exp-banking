package com.expbanking.expBanking.security;

import com.expbanking.expBanking.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import static io.jsonwebtoken.SignatureAlgorithm.HS512;
import static org.springframework.security.config.Elements.JWT;

@Service
public class JwtService {
    private static final String SECRET_KEY = "NUkkNBi67P3dZnfzTUye2/Hfcys/kzLiwdGooAKk369eKhWIuVFtLj1zef63si5U5iBLfrBoJBtX8aTW+Jtz4ejRg02zGarbBcUz2nEvLZ/GfJTDI1DANsvl2V4uFJ2BCidtg13BzD2ZK9oCFgwBF6z7UZfFd1QXCOQf04yBfY2IJfxpltPJ/2kt8/fHmqNJFR4T3Tt9rPiszYco083sW8Bta1beRjDbtIeZfgP18j6ENLDSp6KWVJpWFv7thu4Y4oLzFdIrbjUqDov5QZR/jXS9pL/3zBcOVrGOyxRFhvzoMK/xMlSB9gyzyTve2MJWgRIdOWp2XF+YY3Sk7rg8w9b2A8ik/HcwvcazXBu5PKbdho4CdsgtkEAtI0jvjtjp6NMmoJbO6FMpjWmyTuiv5kaQoD9qw9AHBc5xuukANoymvWviHqyw9allwYip+jdlFSHUViPdObLibmkB4m+Iyz940FUwS2FZAE/QuRyigsYbMoZcRMlwIjAoTqIH5loDXogUBi7enYbOZCe7lH4nJAw56x7ztHV8tMj+6GmVUyEi+88fZxLaW6Q3yrjJI7TOmVlmvgfAmlOI+awcvjLb5MR/9bp85HSZN9aGW2KPL1tsvSRRf6eiGcl1W6rpLDsl/opmIEx2fZ5PDQhI3rYIVh+IB98x+6nOMdLEuQHcGHJS+pmZe2ftffitIp6z6GgL\n";
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    public Long extractUserId(String token) {
        return extractClaim(token, claims -> claims.get("userId", Long.class));
    }
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(UserDetails userDetails, Long userId, Long addressId) {
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("userId", userId);
        extraClaims.put("addressId", addressId);
        return generateToken(extraClaims, userDetails);
    }
    public String generateTokenWithTransactionId(User user, Long transactionId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getId());
        claims.put("transactionId", transactionId); // Add the account ID to the token claims

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() +  1000 * 60 * 24))
                .signWith(getSigningKey(), HS512)
                .compact();
    }
    public Long extractTransactionId(String token) {
        return extractClaim(token, claims -> claims.get("transactionId", Long.class));
    }


    public String generateTokenWithAccountId(User user, Long accountId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getId());
        claims.put("accountId", accountId); // Add the account ID to the token claims

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() +  1000 * 60 * 24))
                .signWith(getSigningKey(), HS512)
                .compact();
    }

    public Long extractAccountId(String token) {
        return extractClaim(token, claims -> claims.get("accountId", Long.class));
    }

    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getSigningKey(), HS512)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
