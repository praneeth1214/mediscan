def basic_health_check(data):
    score = 0
    risks = []

    if data["temperature"] > 38:
        score += 2
        risks.append("Fever detected")

    if data["oxygen"] < 95:
        score += 3
        risks.append("Low oxygen level")

    if data["heart_rate"] > 100:
        score += 1
        risks.append("High heart rate")

    status = "Healthy"

    if score >= 4:
        status = "High Risk"
    elif score >= 2:
        status = "Moderate Risk"

    return {
        "status": status,
        "score": score,
        "risks": risks
    }