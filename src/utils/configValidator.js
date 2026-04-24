/**
 * Validates the config object against the expected schema
 * @param {Object} config - The config object to validate
 * @returns {Object} - { isValid: boolean, errors: string[] }
 */
export function validateConfig(config) {
  const errors = [];

  if (!config) {
    errors.push("Config object is missing");
    return { isValid: false, errors };
  }

  // Validate profile section
  if (!config.profile) {
    errors.push("Missing 'profile' section in config");
  } else {
    if (!config.profile.name) errors.push("Missing 'profile.name'");
    if (!config.profile.jobTitle) errors.push("Missing 'profile.jobTitle'");
    if (!config.profile.image) errors.push("Missing 'profile.image'");
    if (!config.profile.email) errors.push("Missing 'profile.email'");
    if (!config.profile.linkedinUrl) errors.push("Missing 'profile.linkedinUrl'");
  }

  // Validate about section
  if (!config.about) {
    errors.push("Missing 'about' section in config");
  } else {
    if (!config.about.heading) errors.push("Missing 'about.heading'");
    if (!config.about.content) errors.push("Missing 'about.content'");
  }

  // Validate interests section
  if (!config.interests) {
    errors.push("Missing 'interests' section in config");
  } else {
    if (!config.interests.heading) errors.push("Missing 'interests.heading'");
    if (!config.interests.content) errors.push("Missing 'interests.content'");
    if (!Array.isArray(config.interests.links)) {
      errors.push("'interests.links' must be an array");
    } else {
      config.interests.links.forEach((link, index) => {
        if (!link.text) errors.push(`Missing 'interests.links[${index}].text'`);
        if (!link.href) errors.push(`Missing 'interests.links[${index}].href'`);
      });
    }
  }

  // Validate socialLinks section
  if (!config.socialLinks) {
    errors.push("Missing 'socialLinks' section in config");
  } else {
    if (!config.socialLinks.twitter) errors.push("Missing 'socialLinks.twitter'");
    if (!config.socialLinks.facebook) errors.push("Missing 'socialLinks.facebook'");
    if (!config.socialLinks.instagram) errors.push("Missing 'socialLinks.instagram'");
    if (!config.socialLinks.github) errors.push("Missing 'socialLinks.github'");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
